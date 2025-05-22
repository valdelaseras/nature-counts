// import { writable, get } from 'svelte/store';
// import { supabase } from '$lib/supabaseClient';
// import type { User } from '@supabase/supabase-js';
//
// interface AuthState {
// 	user: User | null;
// 	isLoading: boolean;
// }
//
// export const auth = writable<AuthState>({
// 	user: null,
// 	isLoading: true
// });
//
// export const initAuth = () => {
// 	supabase.auth.getSession().then(({ data: { session } }) => {
// 		auth.set({
// 			user: session?.user ?? null,
// 			isLoading: false
// 		});
// 	});
//
// 	supabase.auth.onAuthStateChange((event, session) => {
// 		auth.set({
// 			user: session?.user ?? null,
// 			isLoading: false
// 		});
// 	});
// };
//
// export const isAuthenticated = () => {
// 	const authState = get(auth);
// 	return authState.user !== null;
// };
