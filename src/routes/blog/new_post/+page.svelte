<script lang="ts">
  export let form
  import {Card, Textarea, Button, Input} from 'flowbite-svelte'
  import {enhance} from '$app/forms'

  export let data;
  const current_user = data.user?.me
</script>

<Card size="xl" class="m-auto dark:bg-gray-900 dark:border-gray-700">
  {#if !form?.message_success}
    <h1 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white title_wrap">
      Добавить новый пост
    </h1>
    {#if form?.message_error}<p class="text-red-500">
        Форма заполнена некорректно: ошибка {form.message_error}
      </p>
    {/if}
    <form method="POST" action="?/new_post" enctype="multipart/form-data" use:enhance>
      {#if form?.missing_title}<p class="text-red-500">Обязательное поле</p>{/if}
      <Textarea rows="1" class="text_to_post_title mb-4" placeholder="Заголовок поста" name="title" />
      {#if form?.missing_contain}<p class="text-red-500">Обязательное поле</p>{/if}
      <Textarea rows="16" class="text_to_post_contain mb-4" placeholder="Содержание поста" name="contain" />
      {#if form?.missing_user}<p class="text-red-500">Обязательное поле</p>{/if}
      <Input rows="1" type="hidden" class="id_user_to_post mb-4" placeholder="IdUser" name="user" value={current_user.id} />
      <input
        type="file"
        class="photo_to_post mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        accept="image/*"
        name="photo"/>
      <div class="flex items-center mb-4">
        <input
          type="checkbox"
          name="is_published"
          id="link-checkbox"
          class="is_published w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Опубликовать
        </label>
      </div>
      <Button type="submit" color="light" class="btn_add_post">Отправить</Button>
    </form>
  {:else}
    {#if form?.message_success_publish}
      <h1 class="text-2xl font-bold text-green-600">Успешно отредактировано, <a href="/blog" class="link_after_add_post">перейти к блогу</a></h1>
    {:else}
      <h1 class="text-2xl font-bold text-green-600">Успешно отредактировано, <a href="/blog/users_post" class="link_after_add_post">перейти в "Мои посты"</a></h1>
    {/if}
  {/if}
</Card>
