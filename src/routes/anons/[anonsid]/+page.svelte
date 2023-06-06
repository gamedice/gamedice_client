<script>
  export let data
</script>

<div>
  <h1 class="mx-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
    {data.name}
  </h1>
  <div class="flex flex-row mx-20 mt-12">
    <img src={data.photo} class="w-96 object-cover" />
    <div>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Жанр: </span>{data.genre}
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Компания разработчик: </span>{data.company}
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Дата выпуска: </span>{data.date_created
          .split('-')[2]
          .split('T')[0]}.{data.date_created.split('-')[1]}.{data.date_created.split('-')[0]}
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Описание: </span><br />{data.subscribe}
      </p>
    </div>
  </div>
</div>

<style>
  .description{
    margin-bottom: 1rem;
    margin-left: 3.5rem;
    font-weight: 400;
    text-align: justify;
    line-height: 1.25;
  }
</style>