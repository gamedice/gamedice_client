
export const getUser = async (value) => {
    
// const value = process.env.MY_VALUE
  const response_me = await fetch('http://127.0.0.1:8000/profile/auth/users/me', {
      
  headers:{
        'Authorization': `Bearer ${value}`
      },
    })
    const me = await response_me.json()
    .catch(err => console.error(err))
    return {me}
}
