// Svelte
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ locals }) => {
		const { error } = await locals.supabase.auth.signOut();

		if (error) {
			console.error('Logout error:', error.message);
			return {
				success: false,
				error: error.message
			};
		}

		throw redirect(303, '/login');
	}
};
