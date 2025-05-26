<script lang="ts">
	// Svelte
	import type { PageProps } from './$types';

	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	// Shared
	import { PAGE_PATH } from '$lib/shared/pages';

	let { form }: PageProps = $props();

	const invalidEmailMessage = 'Please enter a valid email address';
	const missingPasswordMessage = 'Please enter a password';

	let email = $state('');
	let emailInputElement = $state<HTMLInputElement>();
	let emailIsValid = $state(false);

	let password = $state('');
	let passwordIsValid = $state(false);

	let displayInvalidEmailMessage = $state(false);
	let displayMissingPasswordMessage = $state(false);

	const handleEmailChange = () => {
		displayInvalidEmailMessage = Boolean(email && !emailIsValid);
	};

	const handlePasswordChange = () => {
		displayMissingPasswordMessage = !password.length;
	};

	$effect(() => {
		if (emailInputElement && email) {
			emailIsValid = emailInputElement.validity.valid;

			if (emailIsValid) {
				displayInvalidEmailMessage = false;
			}
		}
	});

	$effect(() => {
		if (password) {
			passwordIsValid = Boolean(password.length);

			if (passwordIsValid) {
				displayMissingPasswordMessage = false;
			}
		}
	});

	const formIsValid = $derived(emailIsValid && passwordIsValid);
</script>

<article>
	<PageHeader quickNavTarget="landing" />

	<section>
		<form method="POST" action="?/login">
			<div class="form-group">
				<div class="form-field">
					<label for="email">Email address</label>
					<input
						onchange={handleEmailChange}
						bind:this={emailInputElement}
						bind:value={email}
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						placeholder="Email address"
					/>
					{#if displayInvalidEmailMessage}
						<small class="error">{invalidEmailMessage}</small>
					{/if}
				</div>

				<div class="form-field">
					<label for="password">Password</label>
					<input
						onchange={handlePasswordChange}
						bind:value={password}
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						placeholder="Password"
					/>
				</div>
				{#if displayMissingPasswordMessage}
					<small class="error">{missingPasswordMessage}</small>
				{/if}
			</div>

			<footer class="form-footer">
				<button disabled={!formIsValid || !email.length} type="submit">Login</button>
				<a href={PAGE_PATH['signup']}>Sign up</a>
			</footer>
		</form>

		<div class="form-result">
			{#if form?.error}
				<p class="error">
					{form.error}
				</p>
			{/if}
		</div>
	</section>
</article>
