import { supabase } from '$lib/supabaseClient';
import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email') as string;
		// @todo: plaintext pw
		const password = data.get('password') as string;

		const { data: authData, error } = await supabase.auth.signInWithPassword({
			email,
			password
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