import {error, fail, redirect} from '@sveltejs/kit'
// import type { PageServerLoad } from './$types';
import { saveData } from '$lib/actions';
import { postData } from '$lib/store';

export const actions = {
  login: async({cookies, request}) =>{
        const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")
        
          if (!username) {
            return fail(400, {missing_email: true})
          }
          if (!password) {
            return fail(400, {missing_password: true})
          }
      
          if (username && password) {
            const data = new FormData()
            data.append('password', password)
            data.append('username', username)
    
            const response = await fetch('http://127.0.0.1:8000/profile/token/', {
              method: 'POST',
              credentials: 'include',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: username,
                password: password,
              })
            })


              if (response.ok) {
                const res = await response.json()
                // console.log(res)
                const value = res.access
                const refresh = res.refresh
                  cookies.set('access_token' , value, {statusbar: 307, path:'/', maxAge: 100600})
                  // cookies.set('refresh_token' , refresh, {statusbar: 307, path:'/', maxAge: 3600})

                throw redirect(307,'/')
                
                //return {message_success: true, auth_token}
              } else {
                return {message_error: response.status}
              }
        }
    }
    }

    