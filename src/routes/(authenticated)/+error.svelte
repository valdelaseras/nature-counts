<script lang="ts">
	//@todo nice error messages etc.
	//@todo: errors on /dashboard use root error page, should use this one. Not closest ancestor error page?
	import { page } from '$app/state';
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<main>
	<PageHeader displayQuickNav={false} manualPageName="Whoops!" />

	<h1>{page?.error?.message}</h1>
</main>

<style lang="css">
	main {
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
	}
</style>
