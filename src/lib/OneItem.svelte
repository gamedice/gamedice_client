<script>
  import {Card} from 'flowbite-svelte'

  export let photo = ''
  export let title = ''
  export let contain = ''
  export let username = ''
  export let date = ''
  export let month = ''
  export let year = ''
  export let time = ''
</script>

<Card img={photo} size="xl" class="m-auto ">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
  </h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-wrap">
    {contain}
  </p>

  {#if username}
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      By {username} from {date}.{month}.{year}
      {time}
    </p>
  {:else}
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {date}.{month}.{year}
      {time}
    </p>
  {/if}
</Card>
