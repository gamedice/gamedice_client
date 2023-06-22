import type {PageLoad} from './$types'

import {error} from '@sveltejs/kit'
import { PUBLIC_URL } from '$env/static/public';
export const load: PageLoad = async ({fetch}) => {
  const response = await fetch(`${PUBLIC_URL}/blog/`)
  if (response.ok) {
    const posts = await response.json()
    return {posts}
  } else {
    throw error(404, 'Не найдено')
  }
}
