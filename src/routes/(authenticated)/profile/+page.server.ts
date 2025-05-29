// Types
import type { Actions, PageServerLoad } from './$types';

// Shared
import type { Profile } from '$lib/shared/types';

export const load: PageServerLoad = async ({ locals }) => {
	const user = locals.user;

	if (!user) {
		console.error('no user');
	} else {
		const { data: profile, error } = await locals.supabase
			.from('users')
			.select()
			.eq('uuid', user.id)
			.single();

		if (error) {
			console.error('Error fetching profile:', error);
			return {
				profile: undefined
			};
		}

		return {
			profile
		} satisfies {
			profile: Profile;
		};
	}
};

// @todo: server-side validation
export const actions: Actions = {
	updateDisplayName: async ({ request, locals }) => {
		const user = locals.user;

		if (!user) {
			console.error('no user');
		} else {
			const formData = await request.formData();
			const displayName = formData.get('displayName') as string;

			const { error } = await locals.supabase
				.from('users')
				.update({ name: displayName })
				.eq('uuid', user.id)
				.select();

			if (error) {
				return {
					success: false,
					error: error.message
				};
			}

			return {
				success: true
			};
		}
	}
};
