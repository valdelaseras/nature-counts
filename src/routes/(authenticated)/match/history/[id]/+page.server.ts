// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad } from './$types';

// @todo: generic mapper to getMatchDetails would be neat
export const load: PageServerLoad = async ({ params, locals }) => {
	const user = locals.user;

	if (!user) {
		console.error('no user');
	} else {
		// Retrieve the match and all it's observations in a single query
		const { data: match, error } = await locals.supabase
			.from('matches')
			.select(
				`
        *,
        observations!observations_match_fkey(
          id,
          kingdom,
          created_at,
          created_by,
          match
        )
      `
			)
			.eq('created_by', user.id)
			.eq('id', params.id)
			.single();

		if (error) {
			console.error('Error fetching match:', error);
			throw error;
		}

		// @todo
		if (match?.observations?.length) {
			// Collect all relevant user uuids
			const userUuids = [
				...new Set(
					match.observations.map((observations: { created_by: string }) => observations.created_by)
				)
			];

			const { data: users, error: usersError } = await locals.supabase
				.from('users')
				.select('id, uuid, name')
				.in('uuid', userUuids);

			if (!usersError && users) {
				// Create a lookup map for better performance
				const userMap = new Map(users.map((u) => [u.uuid, u]));

				// Merge user data into observations
				match.observations = match.observations.map((obs: { created_by: string }) => ({
					...obs,
					user: userMap.get(obs.created_by) || { id: 0, uuid: '', name: 'Unknown User' }
				}));
			}
		} else {
			match.observations = [];
		}

		return {
			match
		} satisfies {
			match: Match;
		};
	}
};
