<svelte:head>
   <title>{data.name}</title>
</svelte:head>
<script>
  export let data
</script>

<div class="mb-12">
  <h1 class="mx-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
    {data.name}
  </h1>
  <div class="flex flex-row mx-20 mt-12">
    <img src={data.logo} class="w-96 object-cover" />
    <div>
      <p class="my-0 ml-14 font-normal text-justify text-gray-700 dark:text-gray-400 leading-tight">
        <span class="font-bold dark:text-gray-100">Описание: </span><br />{data.biography}
      </p>
    </div>
  </div>
</div>
