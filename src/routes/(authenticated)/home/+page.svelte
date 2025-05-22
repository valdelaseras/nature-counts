<article>
	<header>
		<h1>Home</h1>
	</header>

	<section>
		<header>
			<h2>Matches</h2>
		</header>
		<nav aria-label="Site navigation">
			<ul class="tile-list">
				<li>
					<a href="/match/new">New match</a>
				</li>
				<li>
					<a href="/match/current">Current matches</a>
				</li>
				<li>
					<a href="/match/history">Match history</a>
				</li>
			</ul>
		</nav>
	</section>

	<section>
		<header>
			<h2>Profile</h2>
		</header>
		<nav aria-label="Site navigation">
			<a href="/profile">View your profile</a>
		</nav>
	</section>
</article>

<style lang="css">
	.tile-list {
		background-color: rebeccapurple;
		padding-left: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		li {
			width: calc(50% - 0.5rem);

			a {
				background-color: aquamarine;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 1rem;
				min-height: 10rem;
				box-sizing: border-box;
			}

			a:hover,
			a:focus {
				background-color: mediumaquamarine;
			}
		}
	}
</style>
