<svelte:head>
  <title>{users_post.title}</title>
</svelte:head>

<script lang="ts">
    import OneItemUser from '$lib/OneItemUser.svelte'
    import { Card, Button } from 'flowbite-svelte'

    export let data
    let users_post = data.users_post
    const current_user = data.user?.me
</script>

<div>
  <OneItemUser
    photo={users_post.photo}
    title={users_post.title}
    contain={users_post.contain}
    date={users_post.time_created.split('-')[2].split('T')[0]}
    month={users_post.time_created.split('-')[1]}
    year={users_post.time_created.split('-')[0]}
    time={users_post.time_created.split('T')[1].substring(0, 5)}
    is_published={users_post.is_published}/>
</div>

<Card size="xl" class="m-auto dark:bg-gray-900 dark:border-gray-700 mt-4">
  <Button href="/blog/users_post/{users_post.id}/edit" color="light">Редактировать</Button>
</Card>



