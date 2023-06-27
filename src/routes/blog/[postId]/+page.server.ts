import { PUBLIC_URL } from "$env/static/public"

import {fail} from '@sveltejs/kit'

export const actions = {
  new_comm: async ({request, params}) => {
    const formData = await request.formData()
    const text = formData.get('text')
    const user = formData.get('user')
    const post = formData.get('post')

    if (!text) {
      return fail(400, {missing_text: true})
    }

    if (!user) {
      return fail(400, {missing_user: true})
    }

    if (text && user) {
      const response = await fetch(`${PUBLIC_URL}/blog/${params.postId}/comments/`, {
        method: 'POST',
        body: JSON.stringify({
          text,
          user,
          post,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
      if (response.status==200 || response.status==201) {
        return {message_success: true}
      } else {
        return {message_error: response.status}
      }
    }
  },
}
