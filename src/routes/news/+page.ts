import type {PageLoad} from './$types'

import { PUBLIC_URL } from "$env/static/public"

import {error} from '@sveltejs/kit'

export const load: PageLoad = async ({fetch}) => {
  const response = await fetch(`${PUBLIC_URL}/news/`)
  if (response.ok) {
    const news = await response.json()
    return {news}
  } else {
    throw error(404, 'Не найдено')
  }
}

