import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { posts } from '$lib/schema';
import { fail } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
export const load: PageServerLoad = async () => {


    return {
        posts: await db.query.posts.findMany()
    }
}

export const actions: Actions = {
    'create': async (event) => {
        const formData = await event.request.formData();
        const title = formData.get('title')?.toString();
        const body = formData.get('body')?.toString();

        await db.insert(posts).values({ title, body });

        return { success: true }
    },
    'update': async (event) => {

        const formData = await event.request.formData();
        const post_id = formData.get('post_id')?.toString();
        if (!post_id) return fail(400, { message: 'Post ID missing' });
        const title = formData.get('title')?.toString();
        const body = formData.get('body')?.toString();

        await db.update(posts).set({ title, body }).where(eq(posts.id, Number(post_id)));

        return { success: true }
    },
    'delete': async (event) => {
        const formData = await event.request.formData();
        const post_id = formData.get('post_id')?.toString();
        if (!post_id) return fail(400, { message: 'Post ID missing' });

        await db.delete(posts).where(eq(posts.id, Number(post_id)));

        return { success: true }
    }
}