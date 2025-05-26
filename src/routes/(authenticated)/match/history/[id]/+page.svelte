<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	// @todo type this (to Match)
	let { data } = $props();
</script>

<article>
	<PageHeader manualPageName={data.match.name}/>

	<section>
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
	</section>
</article>

<style lang="css">
	ul {
			flex-direction: column;
	}

	li {
			display: flex;
			justify-content: space-between;
	}
</style>