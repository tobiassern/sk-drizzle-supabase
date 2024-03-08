import type { Handle } from '@sveltejs/kit';
import { initiateDB } from '$lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.db = initiateDB();
    const response = await resolve(event);
    return response;
}