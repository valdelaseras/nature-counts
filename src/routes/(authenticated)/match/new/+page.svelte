<script lang="ts">
	// Types
	import type { PageProps } from './$types';

	// Components
	import PageHeader from '$lib/components/PageHeader.svelte';

	let { form }: PageProps = $props();

	let matchName = $state('');

	const formIsValid = $derived(matchName.length);

	// @todo: form validation
</script>

<article>
	<PageHeader />

	<section>
		<form method="POST" action="?/createMatch">
			<div class="form-group">
				<div class="form-field">
					<label for="match-name">Match name</label>
					<input
						id="match-name"
						name="match-name"
						type="text"
						required
						bind:value={matchName}
						placeholder="Enter a name for the match"
					/>
				</div>
			</div>

			<footer class="form-footer">
				<button disabled={!formIsValid} type="submit">Create</button>
			</footer>
		</form>

		<div class="form-result">
			{#if form?.error}
				<p class="error">
					{form.error}
				</p>
			{/if}
		</div>
	</section>
</article>
