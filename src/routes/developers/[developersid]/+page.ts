import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
export const load: PageLoad = async ({ fetch, params })  => {
  const response = await fetch(`${PUBLIC_URL}/catalog/company/${params.developersid}/`)
  if (response.ok){
    const developers = await response.json()
    return developers
  }
  else{
    throw error(404, 'Не найдено');
  }


}


