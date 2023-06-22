<svelte:head>
   <title>{genre.name}</title>
</svelte:head>
<script>
  import { Button } from 'flowbite-svelte'

  export let data
  const genre = data.genres
  const games = data.games
  let choice = games.filter(function(game){
      return game.genre == genre.name
      });
  choice = choice.slice(0, 3)
</script>
<div class="mb-12">
  <h1 class="mx-20 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
    {genre.name}
  </h1>
  <p class="my-8 mx-20 font-normal text-justify text-gray-700 dark:text-gray-400 leading-tight">
    {genre.subscribe}
  </p>

  <h1 class="mx-20 mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Игры в этом жанре:</h1>

  <div class="flex flex-col mx-20">
    {#each choice as game}
        <div class="flex flex-row mb-8 items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-900">
          <img class="w-40 object-cover rounded-t-lg h-full" src={game.photo} alt="обложка игры" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {game.name}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {game.subscribe.substr(0, 325).concat('...')}
            </p>
            <Button href="/games/{game.id}" color="light" class="w-40">
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
                /></svg>
            </Button>
          </div>
        </div>
    {/each}
  </div>
</div>

  