<script lang="ts">
	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	// Shared
	import { PAGE_PATH } from '$lib/shared/pages';
	import type { Profile } from '$lib/shared/types';

	interface Props {
		data: {
			profile: Profile;
		};
	}

	let { data }: Props = $props();

	// @todo: validation
	// @todo use normal / understandable UX
	// @todo: some randomly generated adjective-animal names
	let displayName = $state(data.profile.name ?? 'Demented Kangaroo');
</script>

<article>
	<PageHeader />

	<section>
		<header>
			<h2>Settings</h2>
		</header>
		<div>
			<form method="POST" action="?/updateDisplayName">
				<div class="form-group">
					<div class="form-field">
						<label for="name">Display name</label>
						<input
							bind:value={displayName}
							id="name"
							type="text"
							maxlength="24"
							placeholder={data.profile.name}
							name="displayName"
						/>
					</div>
				</div>
				<footer class="form-footer">
					<button disabled={!displayName.length} type="submit"> Update </button>
				</footer>
			</form>
		</div>
	</section>

	<section>
		<header>
			<h2>Matches</h2>
		</header>
		<ul>
			<li>
				<a href={PAGE_PATH['current-matches']}>Current matches</a>
			</li>
			<li>
				<a href={PAGE_PATH['match-history']}>Match history</a>
			</li>
		</ul>
	</section>
</article>

<style lang="css">
	article {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
