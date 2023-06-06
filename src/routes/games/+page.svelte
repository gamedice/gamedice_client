<script>
  import {Checkbox, Label, Input, Search, Button} from 'flowbite-svelte'

  let minValue = 0
  let maxValue = 10

  export let data
  const games = data.games
  const developers = data.developers
  const genres = data.genres

  import {paginate, DarkPaginationNav} from 'svelte-paginate'
  let items = games
  let currentPage = 1
  let pageSize = 5
  $: paginatedItems = paginate({items, pageSize, currentPage})

  let name = ''
  function getData(){
    let choice = games.filter(function(game){
      if (name == '') return game
      else return game.name.toLowerCase().includes(name.toLowerCase());
      });
    return items = choice
  }

  function getValueGenre() {
            let checkboxes =
                document.getElementsByName('check_genre');
            let result_gen = [];
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) result_gen.push(checkboxes[i].value)
            }
            let checked_gen = games.filter(function(game){
                for (var i = 0; i < result_gen.length; i++){
                  return result_gen.includes(game.genre)

              } 
            })
            return checked_gen
  }
  function getValueDeveloper() {
            let checkboxes =
                document.getElementsByName('check_developer');
            let result_dev = [];
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].checked) result_dev.push(checkboxes[i].value)
            }
            let checked_dev = games.filter(function(game){
                for (var i = 0; i < result_dev.length; i++){
                  return result_dev.includes(game.company)
                } 
            })
            return checked_dev
  }

  // function getRating(){
  //   let criteria = games.filter(function(game){
  //     if (maxValue == "" ) return minValue <= game.rating
  //     else return minValue <= game.rating && game.rating <= maxValue
  //     });
  //   return items = criteria
  // }

  function getValue(){
    if (getValueGenre().length == 0 && getValueDeveloper().length == 0) items
    else{
      items = [...getValueGenre(), ...getValueDeveloper()]
      let double = items.filter((item, index) => {
        return items.indexOf(item) != index
      });
      items=[...double, ...items]
      items = items.filter((item, index) => {
        return items.indexOf(item) === index
      });
  }
      items = items.filter(function(item){
      if (maxValue == '' ) return minValue <= item.rating
      else return minValue <= item.rating && item.rating <= maxValue
      });
  }

  try{
    document.addEventListener('keydown', function(e) {
      if (e.code === "Enter") {
        getData()
      }
    });
  }

  catch(err){
    console.log('error')
  }

</script>

<div class="flex mx-20 space-x-20">
  <aside>

    <div class="mb-8">
      <Label for="game-input" class="block mb-2">Название игры</Label>
      <Search size="md" placeholder="" id="game-input" bind:value={name}>
        <Button size="sm" class="font-thin" on:click={getData}>Найти</Button>
      </Search>
    </div>

    <div class="mb-8 box_genre">
      <p class="text-gray-900 dark:text-white">Жанр</p>
      <div class="mb-6 overflow-y-auto h-40">
        <ul class="w-44 bg-white rounded dark:bg-gray-800">
          {#each genres as genre}
          <li><Checkbox class="p-3" name="check_genre" value="{genre.name}">{genre.name}</Checkbox></li>
          {/each}
        </ul>
      </div>
    </div>
    
    <div class="mb-8 box_developer">
      <p class="text-gray-900 dark:text-white">Разработчик</p>
      <div class="mb-6 overflow-y-auto h-40">
        <ul class="w-54 bg-white rounded dark:bg-gray-800">
          {#each developers as developer}
          <li><Checkbox class="p-3" name="check_developer" value="{developer.name}">{developer.name}</Checkbox></li>
          {/each}
        </ul>
      </div>
    </div>

    <div>

      <div class="mb-3">
        <Label for="min-rating" class="mb-2" id="block">Рейтинг &#40;от&#41;</Label>
        <Input
          type="number"
          id="min-rating"
          min="0"
          max="10"
          size="sm"
          placeholder=""
          step="0.1"
          bind:value={minValue}
        />
      </div>

      <div class="mb-3">
        <Label for="max-rating" class="mb-2" id="block">Рейтинг &#40;до&#41;</Label>
        <Input
          type="number"
          id="max-rating"
          min="0"
          max="10"
          size="sm"
          placeholder=""
          step="0.1"
          bind:value={maxValue}
        />
      </div>

    </div>
    <div class="flex justify-center mb-12">
      <Button on:click={getValue} color="green" class="mt-3 mb-72 grow">
        Применить
      </Button>
    </div>
    

  </aside>

  <div class=" flex flex-col w-9/12 ">
    {#each paginatedItems as game}
      <div class="mb-6 flex">
        <div class="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-900">
          <img class="w-52 object-cover rounded-t-lg h-full" src={game.photo} alt="обложка игры" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {game.name}
            </h5>
            <p class="mb-1 font-normal text-gray-700 dark:text-gray-400 text-justify ">
              {game.subscribe.substr(0, 300).concat('...')}
            </p>
            <div class="flex flex-row mb-3">
            <p class="mr-3 text-gray-700 dark:text-gray-400 text-justify ">| Жанр: {game.genre} |</p>
            <p class="mx-3 text-gray-700 dark:text-gray-400 text-justify ">| Рейтинг: {game.rating} |</p>
            <p class="mx-3 text-gray-700 dark:text-gray-400 text-justify ">| Разработчик: {game.company} |</p>
            </div>
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
                /></svg
              >
            </Button>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<DarkPaginationNav
  totalItems={items.length}
  {pageSize}
  {currentPage}
  limit={1}
  showStepOptions={true}
  on:setPage={(e) => (currentPage = e.detail.page)}
/>
