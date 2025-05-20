<article>
	<header>
		<h1>Lobby</h1>
	</header>

	<section>
		<nav>
			<ul class="tile-list">
				<li>
					<a href="/match/new">Start a new match</a>
				</li>
				<li>
					<a href="/match/history">View match history</a>
				</li>
			</ul>
		</nav>
	</section>
</article>

<style lang="css">
	.tile-list {
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
              justify-content: center;
              padding: 1rem;
              box-sizing: border-box;
          }

					a:hover, a:focus {
              background-color: mediumaquamarine;
					}
			}
	}
</style>