import { supabase } from '$lib/supabaseClient';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	// Try to get the current session, but don't redirect if not authenticated
	const {
		data: { session }
	} = await supabase.auth.getSession();

	return {
		user: session?.user ?? null
	};
};
