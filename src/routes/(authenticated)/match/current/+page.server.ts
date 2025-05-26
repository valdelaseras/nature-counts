// Libraries
import { supabase } from '$lib/supabaseClient';

// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad }  from './$types';

export const load: PageServerLoad = async () => {
	// only retrieve the matches that do not have an end date, as these matches are ongoing
	const {
		data: matches, error
	} = await supabase
		.from('matches')
		.select('id, name')
		.is('end_date', null);

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