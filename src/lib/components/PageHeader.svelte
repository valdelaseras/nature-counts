<script lang="ts">
	// Svelte
	import { page } from '$app/state';

	// Shared
	import { PAGE_PATH, resolvePageName } from '$lib/shared/pages';

	let {
		displayQuickNav = true,
		quickNavTarget = 'dashboard',
		manualPageName = ''
	} = $props();

	let pageName = resolvePageName(page.url.pathname);
</script>

<header>
	<h1>{manualPageName ? manualPageName : pageName}</h1>

	{#if displayQuickNav}
		<nav aria-label="Site navigation">
			<a href={PAGE_PATH[quickNavTarget]}>Back</a>
		</nav>
	{/if}
</header>

<style lang="css">
	header {
		padding: 1rem 0;
	}

	h1 {
		margin-bottom: 0.5rem;
	}
</style>
