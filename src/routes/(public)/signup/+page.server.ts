import { supabase } from '$lib/supabaseClient';
import type { Actions } from './$types';

// @todo: set minimum password requirements
export const actions: Actions = {
	signup: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		// @todo: plaintext pw
		const password = formData.get('password') as string;

		const { data: authData, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: 'http://localhost:5173/dashboard' // @todo
			}
		});

		// @todo: handle different error cases
		if (error) {
			return {
				success: false,
				error: error.message
			};
		}

		return {
			success: true,
			data: authData
		};
	}
};
