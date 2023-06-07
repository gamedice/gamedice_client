import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
export const load: PageLoad = async ({ fetch, params })  => {
  const response = await fetch(`http://127.0.0.1:8000/catalog/genre/${params.genreid}/`)
  const response_game = await fetch('http://127.0.0.1:8000/catalog/game/')
  if (response.ok && response_game.ok){
    const genres = await response.json()
    const games = await response_game.json()
    return {
      genres, games
    }
  }
  else{
    throw error(404, 'Не найдено');
  }


}

