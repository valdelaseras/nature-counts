<script>
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Shared
	import { PAGE_PATH } from '$lib/shared/pages';
</script>

<!--<script>-->
<!--  let { data } = $props();-->

<!--  console.log(data);-->
<!--</script>-->

<!--<ul>-->
<!--  {#each data.countries as country (country.id)}-->
<!--    <li>{country.name}</li>-->
<!--  {/each}-->
<!--</ul>-->

<main>
	<PageHeader displayQuickNav={false} />

	<nav aria-label="Site navigation">
		<ul>
			<li>
				<a href={PAGE_PATH['login']}>Login</a>
			</li>
			<li>
				<a href={PAGE_PATH['signup']}>Sign up</a>
			</li>
		</ul>
	</nav>
</main>
<Footer />

<style lang="css">
	main {
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	nav {
		padding: 1rem 0;
	}
</style>
