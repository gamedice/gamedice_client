export const load = async () => {
    const response_favorites = await fetch('http://127.0.0.1:8000/profile/api/v1/favorites/1')
    const favorites = await response_favorites.json()
  
    return {favorites}
  }
  