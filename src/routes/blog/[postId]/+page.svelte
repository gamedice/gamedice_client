<script lang="ts">
  export let data
  export let form
  let posts = data.posts
  let comms = data.comms

  import {Card, Button, Textarea, Input} from 'flowbite-svelte'
  import {enhance} from '$app/forms'
  import OneItem from '$lib/OneItem.svelte'
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
    time={posts.time_created.split('T')[1].substring(0, 5)}
  />

  {#each comms as comm}
    <div class="mb-7">
      <Card class="flex first:mt-7 m-auto dark:bg-gray-900 dark:border-gray-700" size="xl">
        <h5 class="text-2xl tracking-tight text-gray-900 dark:text-white">{comm.username}</h5>
        <div class="text-sm">
          {comm.date.split('-')[2].split('T')[0]}.{comm.date.split('-')[1]}.{comm.date.split(
            '-',
          )[0]}
          {comm.date.split('T')[1].substring(0, 5)}
        </div>
        <div>{comm.text}</div>
      </Card>
    </div>
  {/each}

  <div class="mt-7">
    <Card size="xl" class="m-auto dark:bg-gray-900 dark:border-gray-700">
      <form method="POST" action="?/new_comm" use:enhance>
        {#if !form?.message_success}
          {#if form?.missing_text}<p class="text-red-500">Обязательное поле</p>{/if}
          <Textarea class="mb-4" rows="4" placeholder="Оставить комментарий" name="text" />
          {#if form?.missing_user}<p class="text-red-500">Обязательное поле</p>{/if}
          <Input rows="1" class="mb-4" placeholder="idUser" name="user" />
          <input type="hidden" name="post" value={posts.id} />
          <Button type="submit" color="light">Отправить</Button>
        {:else}
          <p class="text-green-600">Ваш комментарий был опубликован</p>
        {/if}
      </form>
    </Card>
  </div>
</div>
