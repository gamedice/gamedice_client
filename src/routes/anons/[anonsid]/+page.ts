import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageLoad = async ({ fetch, params }) =>{
  const response = await fetch(`http://127.0.0.1:8000/catalog/anons/${params.anonsid}/`)
  if (response.ok) {
    const anons = await response.json()
  return  anons 
  } else {
  throw error(404, 'Не найдено');
  }
  }