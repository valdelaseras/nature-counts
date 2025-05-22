<script lang="ts">
	// Svelte
	import { page } from '$app/state';

	// Functions
	import { PAGE_PATH, resolvePageName } from '$lib/shared/pages.js';

	let {
		displayQuickNav = true,
		quickNavTarget = 'dashboard'
	} = $props();

	let pageName = resolvePageName(page.url.pathname);
</script>

<header>
	{#if pageName}
		<h1>{pageName}</h1>
	{/if}

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
