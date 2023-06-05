<script lang="ts">
    export let form
    import { Card, Textarea, Button, Fileupload, Input } from 'flowbite-svelte'
    import { enhance } from '$app/forms'

    const addPost = async (event) => {
        const formEl = event.target
        const data = new FormData(formEl)
        console.log("data.get(`photo`) = ", data.get("photo"))

        const dataToLoad= await fetch('http://127.0.0.1:8000/blog/', {
            method: 'POST', 
            body: data,
        })

        formEl.reset()
    }
</script>

<Card size="xl" class="m-auto">
    {#if !form?.message_success}
    <h1 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white title_wrap">Добавить новый пост</h1>
    <!-- <form method="POST" on:submit|preventDefault={addPost}> -->
    <form method="POST" action="?/new_post" enctype="multipart/form-data" use:enhance>
        {#if form?.missing_title}<p class="text-red-500">Обязательное поле</p>{/if}
        <Textarea rows="1" class="mb-4" placeholder="Заголовок поста" name="title"></Textarea>
        {#if form?.missing_contain}<p class="text-red-500">Обязательное поле</p>{/if}
        <Textarea rows="16" class="mb-4" placeholder="Содержание поста" name="contain"></Textarea>
        {#if form?.missing_user}<p class="text-red-500">Обязательное поле</p>{/if}
        <Input rows="1" class="mb-4" placeholder="IdUser" name="user" />
        <input type="file" class="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" accept="image/*" name="photo"/>
        <div class="flex items-center mb-4">
            <input type="checkbox" name="is_published" id="link-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Опубликовать </label>
        </div>
        <Button type="submit" color="light">Отправить</Button>
    </form>
    {:else}
    <h1 class="text-2xl font-bold text-green-600 ">Успешно</h1>
    {/if}
    
</Card>
