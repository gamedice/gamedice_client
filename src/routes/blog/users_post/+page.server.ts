import type { PageServerLoad } from './$types';

import {error} from '@sveltejs/kit'

import { PUBLIC_URL } from "$env/static/public"

export const load: PageServerLoad = async ({fetch}) => {
  let user_id = process.env.MY_VALUE
  const response = await fetch(`${PUBLIC_URL}/blog/users_post/${user_id}`)
  if (response.ok) {
    const users_posts = await response.json()
    return {users_posts}
  } else {
    throw error(404, 'Не найдено')
  }
}

  