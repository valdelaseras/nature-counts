<script lang="ts">
	let email: string;
	let emailInput: HTMLInputElement;

	let password: string;
	let confirmPassword: string;

	let emailIsValid: boolean;
	let passwordIsValid: boolean;

	let invalidEmailMessage = 'Please enter a valid email address';
	let invalidPasswordMessage = 'These passwords do not match';

	let displayForm = true;
	let displayInvalidEmailMessage: boolean = false;
	let displayInvalidPasswordMessage: boolean = false;

	const handleEmailChange = () => {
		displayInvalidEmailMessage = Boolean(email && !emailIsValid);
	}

	const handlePasswordChange = () => {
		displayInvalidPasswordMessage = Boolean(confirmPassword && !passwordIsValid);
	}

	$: if (emailInput && email) {
		emailIsValid = emailInput.validity.valid;

		if (emailIsValid) {
			displayInvalidEmailMessage = false;
		}
	}

	$: if (password && confirmPassword) {
		passwordIsValid = password === confirmPassword;

		if (passwordIsValid) {
			displayInvalidPasswordMessage = false;
		}
	}

	$: formIsValid = passwordIsValid && emailIsValid;
</script>

<nav aria-label="Site navigation">
	<a href="/">Back</a>
</nav>

<header>
	<h1>Sign up</h1>
</header>

{#if displayForm}
	<form
		on:submit={() => displayForm = false}
		method="POST"
		action="?/signup">
		<div class="form-group">
			<div class="form-field">
				<label for="email">Email address</label>
				<input
					on:change={handleEmailChange}
					bind:this={emailInput}
					bind:value={email}
					id="email"
					name="email"
					type="email"
					required
					autocomplete="email"
					placeholder="Email address"/>
				{#if displayInvalidEmailMessage}
					<small>{invalidEmailMessage}</small>
				{/if}
			</div>
			<div class="form-field">
				<label for="new-password">Create a password</label>
				<input
					on:change={handlePasswordChange}
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
					on:change={handlePasswordChange}
					bind:value={confirmPassword}
					id="confirm-password"
					type="password"
					required
					autocomplete="new-password"
					placeholder="Confirm password"/>
				{#if displayInvalidPasswordMessage}
					<small>{invalidPasswordMessage}</small>
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