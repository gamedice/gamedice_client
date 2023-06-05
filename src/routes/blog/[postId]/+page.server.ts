import { fail } from '@sveltejs/kit';   

export const actions = {
    new_comm: async ({ request, params }) => {
        const formData = await request.formData()
        const text = formData.get("text")
        const user = formData.get("user") 
        const post = formData.get("post")

        if (!text) {
			return fail(400, { missing_text: true });
		}

        if (!user) {
            return fail(400, { missing_user: true });
        }

        if (text && user) {
            await fetch(`http://127.0.0.1:8000/blog/${params.postId}/comments/`, {
            method: 'POST',
            body: JSON.stringify({
                text,
                user,
                post,
            }),
            headers: {
                "Content-type": 'application/json'
            }
        })

            return { message_success: true }
        }
    }
}