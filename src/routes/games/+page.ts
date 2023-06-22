import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
export const load: PageLoad = async ({ fetch }) =>{
  const response = await fetch(`${PUBLIC_URL}/catalog/game/`)
  const response_dev = await fetch(`${PUBLIC_URL}/catalog/company/`)
  const response_genres = await fetch(`${PUBLIC_URL}/catalog/genre/`)
  if (response.ok) {
    const games = await response.json()
    const developers = await response_dev.json()
    const genres = await response_genres.json()
  return { games, developers, genres }
  } else {
  throw error(404, 'Не найдено');
  }
  }
