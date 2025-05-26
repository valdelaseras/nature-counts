import { supabase } from '$lib/supabaseClient';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();

	return {
		user: session?.user ?? null
	};
};
