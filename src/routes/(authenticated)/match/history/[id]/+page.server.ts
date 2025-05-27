// Types
import type { Match } from '$lib/shared/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	const user = locals.user;

	if (!user) {
		console.error('no user');
	} else {
		const { data: match, error } = await locals.supabase
			.from('matches')
			.select(
				`
        *,
        observations(
          id,
          kingdom,
          created_at,
          created_by,
          match, 
          user:users!created_by( 
            id, 
            uuid, 
            name
          )
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

		return {
			match
		} satisfies {
			match: Match;
		};
	}
};
