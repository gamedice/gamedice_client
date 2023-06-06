<script>
  import {Button} from 'flowbite-svelte'

  export let data
  const anons = data.anons

  import {paginate, DarkPaginationNav} from 'svelte-paginate'
  let items = anons
  let currentPage = 1
  let pageSize = 10
  $: paginatedItems = paginate({items, pageSize, currentPage})
</script>

<h1 class="mx-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
  Анонсированные игры
</h1>
<div class=" flex flex-col grow mx-20 mt-12">
  {#each paginatedItems as anon}
    <div class="mb-6 flex">
      <div
        class="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800"
      >
        <img class="w-52 object-cover rounded-t-lg h-full" src={anon.photo} alt="обложка игры" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {anon.name}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify ">
            {anon.subscribe.substr(0, 325).concat('...')}
          </p>
          <Button href="/anons/{anon.id}" color="light" class="w-40">
            Читать <svg
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
        </div>
      </div>
    </div>
  {/each}
</div>

<DarkPaginationNav
  totalItems={items.length}
  {pageSize}
  {currentPage}
  limit={1}
  showStepOptions={true}
  on:setPage={(e) => (currentPage = e.detail.page)}
/>
