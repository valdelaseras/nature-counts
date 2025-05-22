<script lang="ts">
	const invalidEmailMessage = 'Please enter a valid email address';
	const invalidPasswordMessage = 'These passwords do not match';

	let email = $state('');
	let emailInput = $state<HTMLInputElement>();

	let password = $state('');
	let confirmPassword = $state('');

	let emailIsValid = $state(false);
	let passwordIsValid = $state(false);

	let displayForm = $state(true);
	let displayInvalidEmailMessage = $state(false);
	let displayInvalidPasswordMessage = $state(false);

	const handleEmailChange = () => {
		displayInvalidEmailMessage = Boolean(email && !emailIsValid);
	}

	const handlePasswordChange = () => {
		displayInvalidPasswordMessage = Boolean(confirmPassword && !passwordIsValid);
	}

	$effect(() => {
		if (emailInput && email) {
			emailIsValid = emailInput.validity.valid;

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

<nav aria-label="Site navigation">
	<a href="/">Back</a>
</nav>

<header>
	<h1>Sign up</h1>
</header>

{#if displayForm}
	<form
		onsubmit={() => displayForm = false}
		method="POST"
		action="?/signup">
		<div class="form-group">
			<div class="form-field">
				<label for="email">Email address</label>
				<input
					onchange={handleEmailChange}
					bind:this={emailInput}
					bind:value={email}
					id="email"
					name="email"
					type="email"
					required
					autocomplete="email"
					placeholder="Email address"/>
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
					placeholder="Password"/>
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
					placeholder="Confirm password"/>
				{#if displayInvalidPasswordMessage}
					<small class="error">{invalidPasswordMessage}</small>
				{/if}
			</div>
		</div>

		<footer class="form-footer">
			<button
				disabled={!formIsValid}
				type="submit">
					Sign up
			</button>
		</footer>
	</form>
{:else}
	<p>
		We have sent you a confirmation email
	</p>
{/if}