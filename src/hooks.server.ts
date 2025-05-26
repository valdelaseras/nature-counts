// Svelte
import type { Handle } from '@sveltejs/kit';

// Libraries
import { supabase } from '$lib/supabaseClient';

export const handle: Handle = async ({ event, resolve }) => {
	const {
		data: { user },
		error
	} = await supabase.auth.getUser();

	if (user && !error) {
		event.locals.user = user;
	}

	event.locals.supabase = supabase;

	const response = await resolve(event);
	return response;
};
