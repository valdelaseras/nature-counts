// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import { type Session, SupabaseClient, type User } from '@supabase/supabase-js';

declare global {
	namespace App {
		interface Locals {
			user?: User;
			session?: Session;
			supabase: SupabaseClient;
		}
		interface PageData {
			user?: User;
			session?: Session;
		}
	}
}

export {};
