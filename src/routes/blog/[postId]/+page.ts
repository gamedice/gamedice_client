import type {PageLoad} from './$types'

import {error} from '@sveltejs/kit'

export const load: PageLoad = async ({fetch, params}) => {
  const response_posts = await fetch(`http://127.0.0.1:8000/blog/${params.postId}/`)
  const response_comm = await fetch(`http://127.0.0.1:8000/blog/${params.postId}/comments/`)
  if (response_posts.ok && response_comm.ok) {
    const posts = await response_posts.json()
    const comms = await response_comm.json()
    const post_id = params.postId
    return {posts, comms, post_id}
  } else {
    throw error(404, 'Не найдено')
  }
}
