<svelte:head>
  <title>{posts.title}</title>
</svelte:head>

<script lang="ts">
  export let form
  export let data
  let posts = data.posts
  let comms = data.comms

  import { Card, Button, Textarea } from 'flowbite-svelte'
  import { enhance } from '$app/forms'
  import OneItem from '$lib/OneItem.svelte'

  const current_user = data.user?.me
  const is_authenticated = data.is_authenticated
</script>

<div>
  <OneItem
    photo={posts.photo}
    title={posts.title}
    contain={posts.contain}
    username={posts.username}
    date={posts.time_created.split('-')[2].split('T')[0]}
    month={posts.time_created.split('-')[1]}
    year={posts.time_created.split('-')[0]}
    time={posts.time_created.split('T')[1].substring(0, 5)}/>

  {#each comms as comm}
    <div class="mb-7">
      <Card class="flex first:mt-7 m-auto dark:bg-gray-900 dark:border-gray-700" size="xl">
        <h5 class="text-2xl tracking-tight text-gray-900 dark:text-white">{comm.username}</h5>
        <div class="text-sm">
          {comm.date.split('-')[2].split('T')[0]}.{comm.date.split('-')[1]}.{comm.date.split('-',)[0]}
          {comm.date.split('T')[1].substring(0, 5)}
        </div>
        <div class="comm_to_post">{comm.text}</div>
      </Card>
    </div>
  {/each}


  {#if is_authenticated}
  <div class="mt-7">
    <Card size="xl" class="m-auto dark:bg-gray-900 dark:border-gray-700">
      <form method="POST" action="?/new_comm" use:enhance>
      {#if form?.message_error}<p class="text-red-500">
          Форма заполнена некорректно: ошибка {form.message_error}
        </p>
      {/if}
        {#if !form?.message_success}
          {#if form?.missing_text}<p class="text-red-500">Обязательное поле</p>{/if}
          <Textarea class="mb-4 comment_field" rows="4" placeholder="Оставить комментарий" name="text" />
          {#if form?.missing_user}<p class="text-red-500">Обязательное поле</p>{/if}
          <input type="hidden" name="post" value={posts.id} />
          <input type="hidden" name="user" value={current_user.id} />
          <Button type="submit" color="light" class="btn_add_comment">Отправить</Button>
        {:else}
          <p class="text-green-600">Ваш комментарий был опубликован.</p>
          <p class="text-gray-600" on:click={() => location.reload()}>
            Нажмите здесь, чтобы перезагрузить страницу.
          </p>
        {/if}
      </form>
    </Card>
  </div>
  {/if}
</div>
