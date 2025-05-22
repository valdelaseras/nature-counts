<script lang="ts">
	// Components
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />
<main>
	<slot></slot>
</main>
<Footer />

<style lang="css">
	main {
		padding: 1rem 2rem;
	}
</style>
