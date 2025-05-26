// Svelte
import { redirect } from '@sveltejs/kit';

// Types
import type { Actions } from './$types';

// Shared
import { PAGE_PATH } from '$lib/shared/pages';

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		// @todo: plaintext pw
		const password = formData.get('password') as string;

		const { error } = await locals.supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return {
				success: false,
				error: error.message
			};
		}

		throw redirect(303, PAGE_PATH['dashboard']);
	}
};
