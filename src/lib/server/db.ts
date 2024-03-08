import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '$lib/schema'
import { DATABASE_URL } from '$env/static/private';

// Disable prefetch as it is not supported for "Transaction" pool mode 
const client = postgres(DATABASE_URL, { prepare: false })
export const db = drizzle(client, { schema });