// Libraries
import { supabase } from '$lib/supabaseClient';

// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad }  from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log(params.id)

	// retrieve the target match
	const {
		data: match, error
	} = await supabase
		.from('matches')
		.select()
		.eq('id', params.id)
		.single();

	if (error) {
		console.error('Error fetching match:', error);
		// @todo nice errors & messages
		throw error;
	}

	return {
		match
	} satisfies {
		match: Match
	};
};