import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export const requireAuth = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();

	if (!session) {
		throw redirect(303, '/login');
	}

	return session.user;
};
