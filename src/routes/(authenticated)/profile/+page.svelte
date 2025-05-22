<script>
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	// Shared
	import { PAGE_PATH } from '$lib/shared/pages';
</script>

<article>
	<PageHeader />

	<section>
		<header>
			<h2>Settings</h2>
		</header>
		<div>
			<!--todo: display name-->
			<!--todo: light / dark theme-->
			<span>A setting</span>
		</div>
	</section>

	<section>
		<header>
			<h2>Matches</h2>
		</header>
		<ul>
			<li>
				<a href={PAGE_PATH['current-matches']}>Current matches</a>
			</li>
			<li>
				<a href={PAGE_PATH['match-history']}>Match history</a>
			</li>
		</ul>
	</section>
</article>

<style lang="css">
	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul {
		flex-direction: column;
	}
</style>
