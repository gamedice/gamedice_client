import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { PUBLIC_URL } from '$env/static/public';
export const load: PageLoad = async ({ fetch, params })  => {
  const response = await fetch(`${PUBLIC_URL}/catalog/genre/${params.genreid}/`)
  const response_game = await fetch(`${PUBLIC_URL}/catalog/game/`)
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

