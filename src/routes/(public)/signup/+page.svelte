<script lang="ts">
	// @todo: set minimum password requirements
	import type { PageProps } from './$types';
	import PageHeader from '$lib/components/PageHeader.svelte';

	let { form }: PageProps = $props();

	const invalidEmailMessage = 'Please enter a valid email address';
	const invalidPasswordMessage = 'These passwords do not match';

	let email = $state('');
	let emailInputElement = $state<HTMLInputElement>();
	let emailIsValid = $state(false);

	let password = $state('');
	let confirmPassword = $state('');
	let passwordIsValid = $state(false);

	let displayInvalidEmailMessage = $state(false);
	let displayInvalidPasswordMessage = $state(false);

	const handleEmailChange = () => {
		displayInvalidEmailMessage = Boolean(email && !emailIsValid);
	};

	const handlePasswordChange = () => {
		displayInvalidPasswordMessage = Boolean(confirmPassword && !passwordIsValid);
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
		if (password && confirmPassword) {
			passwordIsValid = password === confirmPassword;

			if (passwordIsValid) {
				displayInvalidPasswordMessage = false;
			}
		}
	});

	const formIsValid = $derived(passwordIsValid && emailIsValid);
</script>

<article>
	<PageHeader quickNavTarget="landing" />

	<section>
		<form method="POST" action="?/signup">
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
						required
						autocomplete="email"
						placeholder="Email address"
					/>
					{#if displayInvalidEmailMessage}
						<small class="error">{invalidEmailMessage}</small>
					{/if}
				</div>
				<div class="form-field">
					<label for="new-password">Create a password</label>
					<input
						onchange={handlePasswordChange}
						bind:value={password}
						id="new-password"
						name="password"
						type="password"
						required
						autocomplete="new-password"
						placeholder="Password"
					/>
				</div>
				<div class="form-field">
					<label for="confirm-password">Confirm password</label>
					<input
						onchange={handlePasswordChange}
						bind:value={confirmPassword}
						id="confirm-password"
						type="password"
						required
						autocomplete="new-password"
						placeholder="Confirm password"
					/>
					{#if displayInvalidPasswordMessage}
						<small class="error">{invalidPasswordMessage}</small>
					{/if}
				</div>
			</div>

			<footer class="form-footer">
				<button disabled={!formIsValid || !email.length} type="submit"> Sign up </button>
			</footer>
		</form>

		<div class="form-result">
			{#if form?.success}
				<p>We have sent you a confirmation email. Please follow the link in the email.</p>
			{/if}

			{#if form?.error}
				<p class="error">
					{form.error}
				</p>
			{/if}
		</div>
	</section>
</article>
