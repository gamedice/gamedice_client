<script lang="ts">
  export let data
  const news = data.news

  let items = news
  let currentPage = 1
  let pageSize = 9
  $: paginatedItems = paginate({items, pageSize, currentPage})
  import {paginate, DarkPaginationNav} from 'svelte-paginate'
  import {Card, Button} from 'flowbite-svelte'
</script>

{#if news.length === 0}
  <div class="flex justify-center flex-wrap p-5 m-5">
    <Card size="xl" class="dark:bg-gray-900 dark:border-gray-700">
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">No news yet.</p>
    </Card>
  </div>
{:else}
  <div class="flex justify-center flex-wrap p-5 m-5">
    {#each paginatedItems as item}
      <Card class="m-10 dark:bg-gray-900 dark:border-gray-700">
        <img src={item.photo} alt="itemPhoto" class="h-60 object-cover rounded-t-lg w-full mb-3" />
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap text-ellipsis overflow-hidden"
        >
          {item.title}
        </h5>
        <p
          class="h-40 mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight overflow-hidden text-justify"
        >
          {item.contain}
        </p>
        <Button color="light" href="/news/{item.id}">
          Подробнее <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 ml-2"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            /></svg
          >
        </Button>
      </Card>
    {/each}
  </div>

  <div class="bg-slate-100 dark:bg-gray-900">
  <DarkPaginationNav
    totalItems={items.length}
    {pageSize}
    {currentPage}
    limit={1}
    showStepOptions={true}
    on:setPage={(e) => (currentPage = e.detail.page)}
  />
</div>
{/if}
