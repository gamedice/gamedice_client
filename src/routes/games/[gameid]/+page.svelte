<script>
  import { Rating } from 'flowbite-svelte'

  export let data
  const games = data.games
  const developers = data.developers
  const genres = data.genres
  let genre = genres.filter(function(genre){
    return genre.name == games.genre
    });
  let dev = developers.filter(function(developer){
    return developer.name == games.company
    });
   genre = genre.shift()
   dev = dev.shift()

</script>

<div>
  <div class="flex flex-row justify-between">
    <h1 class="ml-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
      {games.name}
    </h1>
    <a class=" mr-20">
      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-12 h-12 stroke-gray-900 dark:stroke-gray-500">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    </a>
  </div>
  <div class="flex flex-row mx-20 mt-12">
    <img src={games.photo} class="w-96 object-cover" />
    <div>
       <a href="/genre/{genre.id}">
        <p class="description text-gray-700 dark:text-gray-400">
          <span class="font-bold dark:text-gray-100">Жанр: </span>{games.genre}
        </p>
      </a>
      <a href="/developers/{dev.id}">
        <p class="description text-gray-700 dark:text-gray-400">
          <span class="font-bold dark:text-gray-100">Компания разработчик: </span>{games.company}
        </p>
      </a>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Дата выпуска: </span>{games.date_created
          .split('-')[2]
          .split('T')[0]}.{games.date_created.split('-')[1]}.{games.date_created.split('-')[0]}
      </p>
        <div class="content-center description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Рейтинг:</span>
        <Rating total={10} rating={games.rating} size={30} class="mt-1.5 -ml-1.5">
          <p slot="text" class="ml-3 text-sm font-medium text-gray-500 dark:text-gray-400">{games.rating} из 10</p>
        </Rating>
        </div>

        <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Количество игроков: </span>{games.count_player} млн.
      </p>
      <p class="description text-gray-700 dark:text-gray-400">
        <span class="font-bold dark:text-gray-100">Описание: </span><br/>{games.subscribe}
      </p>
    </div>
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