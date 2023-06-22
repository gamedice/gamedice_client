import type {PageLoad} from './$types'

import {error} from '@sveltejs/kit'

import { PUBLIC_URL } from "$env/static/public"

export const load: PageLoad = async ({fetch, params}) => {
  const response = await fetch(`${PUBLIC_URL}/news/${params.newsId}/`)
  if (response.ok) {
    const news = await response.json()
    return {news}
  } else {
    throw error(404, 'Не найдено')
  }
}
