import type { PageLoad } from './$types';

import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch }) =>{
    const response = await fetch(`http://127.0.0.1:8000/blog/`)
    if (response.ok) {
        const posts = await response.json()
        return { posts }
    } else {
        throw error(404, 'Не найдено');
    }
}
