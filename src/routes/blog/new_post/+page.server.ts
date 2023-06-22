import {fail} from '@sveltejs/kit'

import { PUBLIC_URL } from "$env/static/public"

export const actions = {
  new_post: async ({request}) => {
    const formData = await request.formData()
    const title = formData.get('title')
    const contain = formData.get('contain')
    const user = formData.get('user')
    const photo = formData.get('photo')
    let is_published = formData.get('is_published')

    if (is_published == 'on') {
      is_published = true
    } else {
      is_published = false
    }

    if (!title) {
      return fail(400, {missing_title: true})
    }
    if (!contain) {
      return fail(400, {missing_contain: true})
    }
    if (!user) {
      return fail(400, {missing_user: true})
    }

    if (title && contain && user) {
      const data = new FormData()
      data.append('title', title)
      data.append('contain', contain)
      data.append('user', user)
      data.append('photo', photo)
      data.append('is_published', is_published)

      const response = await fetch(`${PUBLIC_URL}/blog/`, {
        method: 'POST',
        body: data,
      })
      if (response.status==200 || response.status==201) {
        return {message_success: true}
      } else {
        return {message_error: response.status}
      }
    }
  },
}
