<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	// Shared
	import { PAGE_PATH } from '$lib/shared/pages';
</script>

<article>
	<PageHeader displayQuickNav={false} />

	<section>
		<header>
			<h2>Matches</h2>
		</header>
		<nav aria-label="Site navigation">
			<ul class="tile-list">
				<li>
					<a href={PAGE_PATH['new-match']}>New match</a>
				</li>
				<li>
					<a href={PAGE_PATH['current-matches']}>Current matches</a>
				</li>
				<li>
					<a href={PAGE_PATH['match-history']}>Match history</a>
				</li>
			</ul>
		</nav>
	</section>

	<section>
		<header>
			<h2>Profile</h2>
		</header>
		<nav aria-label="Site navigation">
			<a href={PAGE_PATH['profile']}>View your profile</a>
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
