<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	// Types
	import type { Match } from '$lib/shared/types';

	interface Props {
		data: {
			match: Match;
		};
	}

	let { data }: Props = $props();
</script>

<article>
	<PageHeader quickNavTarget="match-history" manualPageName={data.match.name} />

	<section>
		<h2>Details</h2>
		<ul>
			<li>
				<span class="bold">Start date</span>
				<span>{data.match.start_date}</span>
			</li>
			<li>
				<span class="bold">End date</span>
				<span>{data.match.end_date}</span>
			</li>
		</ul>

		<h2>Observations</h2>
		<ul>
			{#each data.match.observations ?? [] as observation (observation.id)}
				<li>
					<div>
						<p class="bold">Kingdom</p>
						<span class="capitalize">{observation.kingdom}</span>
					</div>
					<div>
						<p class="bold">Created by</p>
						<span>{observation.user.name}</span>
					</div>
					<div>
						<p class="bold">Created at</p>
						<span>{observation.created_at}</span>
					</div>
				</li>
			{/each}
		</ul>
	</section>
</article>

<style lang="css">
	ul {
		flex-direction: column;
	}

	li {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
</style>
