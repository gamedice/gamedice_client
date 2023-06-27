import { PUBLIC_URL } from "$env/static/public"

import { fail } from '@sveltejs/kit'
import { redirect } from '@sveltejs/kit'

export const actions = {
  patch_post: async ({request, params}) => {
    let user_id = process.env.MY_VALUE

    const formData = await request.formData()
    const title = formData.get('title')
    const contain = formData.get('contain')
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

    if (title && contain) {
      const data = new FormData()
      data.append('title', title)
      data.append('contain', contain)
      data.append('is_published', is_published)

      const response = await fetch(`${PUBLIC_URL}/blog/users_post/${user_id}/${params.user_postId}`, {
        method: 'PATCH',
        body: data,
      })
      if (response.status==200 || response.status==201) {
        if (is_published === true) {
          return {message_success_publish: true, message_success: true}
        } else { 
          return {message_success_publish: false, message_success: true}
        } 
      } else {
        return {message_error: response.status}
      }
    }
  },

  delete_post: async (event) => {
    let user_id = process.env.MY_VALUE
    console.log(event)
    await fetch(`${PUBLIC_URL}/blog/users_post/${user_id}/${event.params.user_postId}`,{
        method:  'DELETE'
      })
      throw redirect(302, '/blog/users_post')
  }
}
