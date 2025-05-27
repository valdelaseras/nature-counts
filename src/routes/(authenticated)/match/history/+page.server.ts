// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user;

	if (!user) {
		console.error('no user');
	} else {
		// only retrieve the matches that have an end date, as these matches are closed
		const { data: matches, error } = await locals.supabase
			.from('matches')
			.select('id, name') // retrieve only what we need at this point
			.eq('created_by', user.id)
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
			matches: Match[];
		};
	}
};
