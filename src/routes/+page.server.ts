export const load = async () => {
    const response_news = await fetch('http://127.0.0.1:8000/news/')
    const last_new = await response_news.json()
  
    const response_anons = await fetch('http://127.0.0.1:8000/catalog/anons/')
    const anons = await response_anons.json()
  
    return {last_new, anons}
  }
  