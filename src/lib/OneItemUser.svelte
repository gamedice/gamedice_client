<script lang="ts">
  import {Card} from 'flowbite-svelte'

  export let photo:String
  export let title:String
  export let contain:String
  export let date:String
  export let month:String
  export let year:String
  export let time:String
  export let is_published:Boolean
</script>

<Card img={photo} size="xl" class="m-auto dark:bg-gray-900 dark:border-gray-700 max-xl:m-4">
  <h5 class="title_item mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
  </h5>
  <p class="contain_item mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight whitespace-pre-wrap">
    {contain}
  </p>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {date}.{month}.{year}
    {time}
  </p>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
    {is_published ? 'Опубликован' : 'Не опубликован'}
  </p>

</Card>
