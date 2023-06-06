<script>
  import {Input} from 'flowbite-svelte'
  export let data
  const developers = data.developers

  import {paginate, DarkPaginationNav} from 'svelte-paginate'
  let items = developers
  let currentPage = 1
  let pageSize = 10
  $: paginatedItems = paginate({items, pageSize, currentPage})

  let name = ''
  function getData(){
    let choice =  developers.filter(function(developers){
      if (name == '') return developers
      else return developers.name.toLowerCase().includes(name.toLowerCase())
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

<div class="w-1/2">
  <h1 class="mx-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
    Разработчики
  </h1>
  <div class="my-6 mx-20">
    <form class="flex gap-2" >
      <Input size="md" placeholder="Введите название компании" bind:value={name} id="form"/>
    </form>
  </div>
</div>

<div class=" flex flex-col mx-20 mt-6">
  {#each paginatedItems as developer}
  <div class="mb-6 flex">
    <a href="/developers/{developer.id}" class="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700">
      <img class="w-52 object-cover rounded-t-lg h-full" src="{developer.logo}" alt="лого компании">
      <div class="flex flex-col justify-between p-4 leading-normal" >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{developer.name}</h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify ">{developer.biography.substr(0, 325).concat('...')}</p>
      </div>
    </a>
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
