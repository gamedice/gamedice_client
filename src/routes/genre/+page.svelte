<script>
  import {Card, Input} from 'flowbite-svelte'
  export let data
  const genres = data.genres

  import {paginate, DarkPaginationNav} from 'svelte-paginate'
  let items = genres
  let currentPage = 1
  let pageSize = 10
  $: paginatedItems = paginate({items, pageSize, currentPage})

  let name = ''
  function getData(){

    let choice =  genres.filter(function(genres){
      if (name == '') return genres
      else return genres.name.toLowerCase().includes(name.toLowerCase())
      });
    return items = choice
  }
try{
  document.addEventListener('keyup', getData)
}
catch(err){
  console.log('error')
}
  
</script>

<div class="w-1/3">
  <h1 class="mx-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Жанры</h1>
  <div class="my-6 mx-20">
    <form class="flex gap-2" >
      <Input size="md" placeholder="Введите жанр" bind:value={name}/>
    </form>
  </div>
</div>

<div class=" flex flex-col grow mx-20 mt-6">
  {#each paginatedItems as genre}
    <div class="mb-6 flex">
      <Card href="/genre/{genre.id}" size="xl" class="dark:bg-gray-900">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {genre.name}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight text-justify ">
          {genre.subscribe.substr(0, 325).concat('...')}
        </p>
      </Card>
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
