import  {postData} from '$lib/store'
import {getUser} from '../lib/api'
import type { LayoutServerLoad } from "./$types";


export const load = (async ({cookies,locals}) => {
  const access_token = cookies.get('access_token')
  let user 
  console.log("USER", access_token)

  try {
    if (access_token){
      user = await getUser(access_token)
    }
  }catch{
      console.log("Err")
    }
    return{
      access_token,
      user,
      is_authenticated:locals.is_authenticated,
    }
  })satisfies LayoutServerLoad