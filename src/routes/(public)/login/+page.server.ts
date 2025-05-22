import { supabase } from '$lib/supabaseClient';

// Svelte
import { redirect } from '@sveltejs/kit';

// Types
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		// @todo: plaintext pw
		const password = data.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return {
				success: false,
				error: error.message
			};
		}

		throw redirect(303, '/dashboard');
	}
};
