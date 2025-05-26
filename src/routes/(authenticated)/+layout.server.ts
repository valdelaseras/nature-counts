// Auth
import { requireAuth } from '$lib/auth/protectedRoute';

// Libraries
import { supabase } from '$lib/supabaseClient';

// Types
import type { LayoutServerLoad } from './$types';
import type { Match } from '$lib/shared/types';
import type { User } from '@supabase/supabase-js';

export const load: LayoutServerLoad = async () => {
	const user = await requireAuth();

	const {
		data: matches, error
	} = await supabase.from('matches').select();

	if (error) {
		console.error('Error fetching matches:', error);
		return {
			user,
			matches: []
		};
	}

	return {
		user,
		matches
	} satisfies {
		user: User;
		matches: Match[]
	};
};
