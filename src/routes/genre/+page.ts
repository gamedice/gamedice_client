import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
export const load: PageLoad = async ({ fetch }) =>{
  const response = await fetch(`${PUBLIC_URL}/catalog/genre/`)
  if (response.ok) {
    const genres = await response.json()
  return { genres }
  } else {
  throw error(404, 'Не найдено');
  }
  }