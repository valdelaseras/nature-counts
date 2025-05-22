<nav aria-label="Site navigation">
	<a href="/">Back</a>
</nav>

<header>
	<h1>Login</h1>
</header>

<form>
	<div class="form-group">
		<div class="form-field">
			<label for="email">Email address</label>
			<input
				id="email"
				type="email"
				autocomplete="email"
				required
				placeholder="Email address"/>
		</div>

		<div class="form-field">
			<label for="password">Password</label>
			<input
				id="password"
				type="password"
				autocomplete="current-password"
				required
				placeholder="Password"/>
		</div>
	</div>

	<footer class="form-footer">
		<button type="submit">Login</button>
		<a href="/signup">Sign up</a>
		<a href="/home">Mock login</a>
	</footer>
</form>

