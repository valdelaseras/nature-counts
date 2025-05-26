// Libraries
import { supabase } from '$lib/supabaseClient';

// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// only retrieve the matches that have an end date, as these matches are closed
	const {
		data: matches, error
	} = await supabase
		.from('matches')
		.select('id, name') // retrieve only what we need at this point
		.not('end_date', 'is', null);

	if (error) {
		console.error('Error fetching matches:', error);
		return {
			matches: []
		};
	}

	return {
		matches
	} satisfies {
		matches: Match[]
	};
};