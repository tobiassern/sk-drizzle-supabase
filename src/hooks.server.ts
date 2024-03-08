import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '$lib/schema'
import { DATABASE_URL } from '$env/static/private';

// Disable prefetch as it is not supported for "Transaction" pool mode 



import type { Handle } from '@sveltejs/kit';
import { db } from '$lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.db = db;
    const response = await resolve(event);
    return response;
}