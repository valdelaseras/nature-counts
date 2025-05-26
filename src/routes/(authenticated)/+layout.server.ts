// Auth
import { requireAuth } from '$lib/auth/protectedRoute';

// Types
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const user = await requireAuth();

	return {
		user
	};
};
