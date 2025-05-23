<script lang="ts">
	// Components
	import Nav from '$lib/components/Nav.svelte';

	// Svelte
	import type { LayoutData } from './$types';

	interface Props {
		data: LayoutData;
		children: import('svelte').Snippet;
	}

	let { data, children }: Props = $props();
</script>

<Nav user={data.user} />
<main>
	{@render children()}
</main>

<style lang="css">
	nav {
		padding: 1rem 2rem;
		background-color: aqua;
	}

	main {
		padding: 1rem 2rem;
	}
</style>
