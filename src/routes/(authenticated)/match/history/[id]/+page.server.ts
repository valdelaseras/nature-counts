// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	// const user = locals.user;
	//
	// if (!user) {
	// 	console.error('no user');
	// }

	// retrieve the target match
	const { data: match, error } = await locals.supabase
		.from('matches')
		.select()
		.eq('id', params.id)
		.single();

	// @todo: if id belongs to other user or user was not a participant, not allowed/found in history match details
	if (error) {
		console.error('Error fetching match:', error);
		// @todo nice errors & messages
		throw error;
	}

	return {
		match
	} satisfies {
		match: Match;
	};
};
