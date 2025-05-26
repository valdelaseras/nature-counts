// Libraries
import { supabase } from '$lib/supabaseClient';

// Svelte
import { redirect } from '@sveltejs/kit';

// Types
import type { Actions } from './$types';

// Shared
import { PAGE_PATH } from '$lib/shared/pages';

export const actions: Actions = {
	createMatch: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('match-name') as string;
		// @todo replace with cleaner locals solution eventually
		const userId = formData.get('user-id') as string;
		const startDate = new Date().toISOString().split('T')[0];

		const { error } = await supabase
			.from('matches')
			.insert([
				{
					name: name,
					start_date: startDate,
					created_by: userId
				}
			])
			.select();

		if (error) {
			return {
				success: false,
				error: error.message
			};
		}

		// @todo: redirect somewhere else.
		throw redirect(303, PAGE_PATH['current-matches']);
	}
};
