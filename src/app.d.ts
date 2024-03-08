// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { drizzle } from 'drizzle-orm/postgres-js'
import * as schema from '$lib/schema';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			db: any;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
