import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
export const load: PageLoad = async ({ fetch }) =>{
  const response = await fetch(`${PUBLIC_URL}/catalog/game/`)
  if (response.ok) {
    const random = await response.json()
  return { random }
  } else {
  throw error(404, 'Не найдено');
  }
  }