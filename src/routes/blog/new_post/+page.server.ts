import { fail } from '@sveltejs/kit';   

export const actions = {
    new_post: async ({ request }) => {
        const formData = await request.formData()
        const title = formData.get("title") 
        const contain = formData.get("contain") 
        const user = formData.get("user") 
        const photo = formData.get("photo")
        let is_published = formData.get("is_published")

        if (is_published == "on") { is_published = true } 
        else { is_published = false }

        console.log("photo = ", photo)

        if (!title) {
			return fail(400, { missing_title: true });
		}
        if (!contain) {
            return fail(400, { missing_contain: true });
        }
        if (!user) {
            return fail(400, { missing_user: true });
        }

        

        if (title && contain && user) {
            await fetch('http://127.0.0.1:8000/blog/', {
            method: 'POST',
            body: JSON.stringify({
                title,
                contain,
                user,
                photo,
                is_published,
            }),
            headers: {
                "Content-type": 'application/json'
            }
        })        
            return { message_success: true }
        }
    }
}   