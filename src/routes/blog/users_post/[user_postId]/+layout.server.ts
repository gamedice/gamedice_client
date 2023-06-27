import type { PageServerLoad } from './$types'

import { PUBLIC_URL } from "$env/static/public"

import {error} from '@sveltejs/kit'

export const load: PageServerLoad = async ({fetch, params}) => {
  let user_id = process.env.MY_VALUE
  const response = await fetch(`${PUBLIC_URL}/blog/users_post/${user_id}/${params.user_postId}`)
  if (response.ok) {
    const users_post = await response.json()
    return {users_post}
  } else {
    throw error(404, 'Не найдено')
  }
}



