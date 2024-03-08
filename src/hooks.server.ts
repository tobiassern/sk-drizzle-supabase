import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '$lib/schema'
import { DATABASE_URL } from '$env/static/private';

// Disable prefetch as it is not supported for "Transaction" pool mode 



import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {

    const client = postgres(DATABASE_URL, { prepare: false })
    event.locals.db = drizzle(client, { schema });

    const response = await resolve(event);
    return response;
}