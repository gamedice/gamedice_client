<script>
  import {Button} from 'flowbite-svelte'

  export let data
  const random = data.random
  let amount = random.length
  let sett = Math.floor(Math.random() * amount)

  function getRandom() {
    return sett = Math.floor(Math.random() * amount)
  }
</script>

<div>
  <div class="flex flex-row justify-between">
    <h1 class="ml-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
      {random[sett].name}
    </h1>
    <a class=" mr-20">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-12 h-12 stroke-gray-900 dark:stroke-gray-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </a>
  </div>
  <div class="flex flex-row mx-20 mt-12">
    <img src={random[sett].photo} class="w-96 object-cover" />
    <div>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Жанр: </span>{random[sett].genre}
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Компания разработчик: </span>{random[sett]
          .company}
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Дата выпуска: </span>{random[sett].date_created
          .split('-')[2]
          .split('T')[0]}.{random[sett].date_created.split('-')[1]}.{random[
          sett
        ].date_created.split('-')[0]}
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Рейтинг: </span> {random[sett].rating}
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Количество игроков: </span>{random[sett]
          .count_player} млн.
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Описание: </span><br />{random[sett].subscribe}
      </p>
    </div>
  </div>
  <div class="flex justify-center mb-12">
    <Button on:click={getRandom} color="green" class="m-auto my-12 mx-20">
      Сгенерировать случайную игру
    </Button>
  </div>
</div>

<style>
  .description{
    margin-bottom: 1rem;
    margin-left: 5rem;
    margin-right: 5rem; 
    font-weight: 400;
    text-align: justify;
    line-height: 1.25;
  }
</style>