<script lang="ts">
	// Svelte
	import { afterNavigate } from '$app/navigation';

	// Shared
	import { PAGE_PATH } from '$lib/shared/pages';

	let displayMenu = $state(false);

	afterNavigate(() => {
		displayMenu = false;
	});

	// @todo: svelte:window (4) event listener to keyup Escape and then displayMenu = false
</script>

<nav aria-label="Site navigation">
	<span>Nav</span>
	<!--@todo: only if user/authed-->
	<button onclick={() => (displayMenu = !displayMenu)}>
		{displayMenu ? 'Close' : 'Open'} menu
	</button>

	{#if displayMenu}
		<div class="menu">
			<ul class="menu-list">
				<li>
					<a href={PAGE_PATH['dashboard']}>Dashboard</a>
				</li>
				<li>
					<a href={PAGE_PATH['profile']}>Profile</a>
				</li>
			</ul>

			<ul class="menu-list">
				<li>
					<!--@todo-->
					<button onclick={() => console.log('sign out and redirect to /')}>Logout</button>
				</li>
			</ul>
		</div>
	{/if}
</nav>

<style lang="css">
	nav {
		display: flex;
		justify-content: space-between;
		padding: 1rem 2rem;
		background-color: aqua;
		position: relative;
	}

	.menu,
	.menu-list {
		display: flex;
		flex-direction: column;
	}

	.menu {
		background-color: aqua;
		position: absolute;
		padding: 1rem 2rem;
		left: 0;
		right: 0;
		top: 53px;
		gap: 1.5rem;
	}

	.menu-list {
		padding-left: 0;
		list-style: none;
		gap: 1rem;
	}
</style>
