<nav aria-label="Site navigation">
	<a href="/">Back</a>
</nav>

<header>
	<h1>Sign up</h1>
</header>

<form>
	<div class="form-group">
		<div class="form-field">
			<label for="email">Email address</label>
			<input
				id="email"
				type="email"
				required
				autocomplete="email"
				placeholder="Email address"/>
		</div>
		<div class="form-field">
			<label for="new-password">Create a password</label>
			<input
				id="new-password"
				type="password"
				required
				autocomplete="new-password"
				placeholder="Password"/>
		</div>
		<div class="form-field">
			<label for="confirm-password">Confirm password</label>
			<input
				id="confirm-password"
				type="password"
				required
				autocomplete="new-password"
				placeholder="Confirm password"/>
		</div>
	</div>

	<footer class="form-footer">
		<button type="submit">Sign up</button>
	</footer>
</form>