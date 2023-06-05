import type { PageLoad } from './$types';

import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) =>{
    const response = await fetch(`http://127.0.0.1:8000/news/${params.newsId}/`)
    if (response.ok) {
        const news = await response.json()    
        return { news }
    } else {
        throw error(404, 'Не найдено');
    }
}