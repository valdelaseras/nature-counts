// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user;

	if (!user) {
		console.error('no user');
	}

	// only retrieve the matches that do not have an end date, as these matches are ongoing
	const { data: matches, error } = await locals.supabase
		.from('matches')
		.select('id, name')
		.eq('created_by', user?.id)
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
		matches: Match[];
	};
};
