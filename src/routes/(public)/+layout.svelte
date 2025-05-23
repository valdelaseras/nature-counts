<script lang="ts">
	// Components
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	interface Props {
		children: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Nav />
<main>
	{@render children()}
</main>
<Footer />

<style lang="css">
	main {
		padding: 1rem 2rem;
	}
</style>
