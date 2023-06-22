import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
export const load: PageLoad = async ({ fetch, params }) =>{
  const response = await fetch(`${PUBLIC_URL}/catalog/anons/${params.anonsid}/`)
  if (response.ok) {
    const anons = await response.json()
  return  anons 
  } else {
  throw error(404, 'Не найдено');
  }
  }