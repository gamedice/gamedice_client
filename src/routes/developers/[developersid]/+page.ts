import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageLoad = async ({ fetch, params })  => {
  const response = await fetch(`http://127.0.0.1:8000/catalog/company/${params.developersid}/`)
  if (response.ok){
    const developers = await response.json()
    return developers
  }
  else{
    throw error(404, 'Не найдено');
  }


}


