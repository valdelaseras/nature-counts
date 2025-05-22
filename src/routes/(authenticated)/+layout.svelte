<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<main>
	<slot></slot>
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
