<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { PAGE_PATH } from '$lib/shared/pages';
	import type { Match } from '$lib/shared/types';

	interface Props {
		data: {
			matches: Match[];
		};
	}

	let { data }: Props = $props();
</script>

<article>
	<PageHeader />

	<section>
		<ul>
			{#each data.matches as match (match.id)}
				<li>
					<a href="{PAGE_PATH['match-history']}/{match.id}">
						<span>{match.name}</span>
					</a>
				</li>
			{/each}
		</ul>
	</section>
</article>

<style lang="css">
	a {
		display: flex;
		justify-content: space-between;
	}
</style>
