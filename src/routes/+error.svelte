<script lang="ts">
	//@todo nice error messages etc.
	import { page } from '$app/state';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<main>
	<PageHeader
		quickNavTarget="landing"
		manualPageName="Whoops!" />

	<h1>{page?.error?.message}</h1>
</main>

<style lang="css">
    main {
        padding: 1rem 2rem;
        display: flex;
        flex-direction: column;
    }
</style>