<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	let { data } = $props();
</script>

<article>
	<PageHeader manualPageName="Match name"/>

	<section>
		{JSON.stringify(data.match)}
	</section>
</article>

<style lang="css">
    ul {
        flex-direction: column;
    }
</style>