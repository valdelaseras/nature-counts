// Supabase
import { supabase } from '$lib/supabaseClient';

// Svelte
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async () => {
		const { error } = await supabase.auth.signOut();

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
