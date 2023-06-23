import type { Handle } from "@sveltejs/kit"

/**@type {import ('@sveltejs/kit').Handle} */
export const handle: Handle = async ({event,resolve}) => {
    const access_token = event.cookies.get('access_token')
    event.locals.is_authenticated = access_token ? true : false;
    console.log('hooks.server', access_token )
    return resolve(event)
}

