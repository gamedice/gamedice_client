import {fail} from '@sveltejs/kit'

export const actions = {
    new_user: async ({request}) => {
      const data = await request.formData()
      const username = data.get('username')
      const email = data.get('email')
      const password = data.get('password')
      console.log({username, email,password})

  
      if (!username) {
        return fail(400, {missing_username: true})
      }
      if (!email) {
        return fail(400, {missing_email: true})
      }
      if (!password) {
        return fail(400, {missing_password: true})
      }
  
      if (username && email && password) {
        const data = new FormData()
        data.append('email', email)
        data.append('username', username)
        data.append('password', password)

        const response = await fetch('http://127.0.0.1:8000/profile/auth/users/', {
            method: 'POST',
            body: data,
          })
          if (response.ok) {
            return {message_success: true}
          } else {
            return {message_error: response.status}
          }
    }
}
}