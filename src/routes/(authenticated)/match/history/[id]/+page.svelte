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
			<li class="bold">
				<span>Winner</span>
				<span>Name</span>
			</li>
			<li>
				<span class="bold">Participants</span>
				<ul class="row-list">
					<!--for each participant-->
					<li>
						<span>Name</span>
					</li>
					<li>
						<span>Name</span>
					</li>
					<li>
						<span>Name</span>
					</li>
				</ul>
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
					<!--@todo probably wanna go to an observation details page... maybe. Or a component or something-->
					<tr>
						<td class="capitalize">{observation.kingdom}</td>
						<td>{observation.user.name}</td>
						<td>{formatDateTimeTimezone(observation.created_at)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</section>
</article>

<style lang="css">
	li {
		display: flex;
		justify-content: space-between;
	}

	.row-list li:not(:last-child)::after {
		content: ',';
	}
</style>
