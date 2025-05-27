<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	// Types
	import type { Match } from '$lib/shared/types';

	// Shared
	import { formatDate, formatDateTimeTimezone } from '$lib/shared/dateFormatters';

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
				<span>{formatDate(data.match.start_date)}</span>
			</li>
			<li>
				<span class="bold">End date</span>
				<span>{formatDate(data.match.end_date)}</span>
			</li>
		</ul>

		<h2>Observations</h2>

		<table>
			<thead>
				<tr>
					<th>Kingdom</th>
					<th>Observer</th>
					<th>Time</th>
				</tr>
			</thead>
			<tbody>
				{#each data.match.observations ?? [] as observation (observation.id)}
					<tr>
						<td>{observation.kingdom}</td>
						<td>{observation.user.name}</td>
						<td>{formatDateTimeTimezone(observation.created_at)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
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

	table {
			text-align: left;
	}
</style>
