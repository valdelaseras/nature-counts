// Svelte
import { redirect } from '@sveltejs/kit';

// Types
import type { Actions } from './$types';

// Shared
import { PAGE_PATH } from '$lib/shared/pages';

export const actions: Actions = {
	createMatch: async ({ request, locals }) => {
		const user = locals.user;

		if (!user) {
			console.error('no user');
		}

		const formData = await request.formData();
		const name = formData.get('match-name') as string;
		const startDate = new Date().toISOString().split('T')[0];

		const { error } = await locals.supabase
			.from('matches')
			.insert([
				{
					name: name,
					start_date: startDate,
					created_by: user?.id
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
