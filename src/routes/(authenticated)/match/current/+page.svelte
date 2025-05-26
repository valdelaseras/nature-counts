<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { Match } from '$lib/shared/types';

	interface Props {
		data: {
			matches: Match[]
		}
	}

	let { data }: Props = $props();
</script>

<article>
	<PageHeader />

	<section>
		<ul>
			{#each data.matches as match (match.id)}
				<li>
					{match.name}
				</li>
			{/each}
		</ul>
	</section>
</article>

<style lang="css">
	ul {
			flex-direction: column;
	}
</style>