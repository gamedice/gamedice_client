import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageLoad = async ({ fetch, params })  => {
  const response = await fetch(`http://127.0.0.1:8000/catalog/game/${params.gameid}/`)
  const response_dev = await fetch(`http://127.0.0.1:8000/catalog/company/`)
  const response_genres = await fetch(`http://127.0.0.1:8000/catalog/genre/`)
  if (response.ok){
    const games = await response.json()
    const genres = await response_genres.json()
    const developers = await response_dev.json()
    return {
      games, genres, developers
    }
  }
  else{
    throw error(404, 'Не найдено');
  }
}


