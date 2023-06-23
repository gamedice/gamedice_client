<script>
    import { page } from '$app/stores'
    import {Card, Button} from 'flowbite-svelte';
    import {postData} from '../../lib/store'
    import { saveData } from '../../lib/actions';
    export let data;
    const me = data.me
    const favorites = data.favorites


  </script>


<div class="background">

{#if $page.data.is_authenticated} 
<div class="flex flex-col p-5 m-auto">    
<h1 class="font-bold text-2xl">Избранные игры</h1>
</div>


<div class="container_for_news flex justify-center flex-wrap p-5 m-5">

      {#each favorites as item}
      <Card class="one_card m-10 dark:bg-gray-900 dark:border-gray-700">
        <img src={item.photo} alt="itemPhoto" class="h-60 object-cover rounded-t-lg w-full mb-3" />
        <h5
          class="title_card_news mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-nowrap text-ellipsis overflow-hidden"
        >
          {item.game_name}
        </h5>
        <p
          class="h-40 mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight overflow-hidden text-justify"
        >
          {item.subscribe}
        </p>
        <Button color="light" href="/games/{item.id}" class="button_to_news_item">
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

  {:else}
  <h1>Войдите в аккаунт</h1>
  {/if}
</div>

<style>
  h1{  color: #83D6ED;
  margin-left: 15%;
  margin-top: 5vh;}

  .background{
  background-image: url("../../assets/background.svg");
  background-repeat: no-repeat; 
  margin-top: 10vh;
  background-size:90%;
  right: 0;
}
</style>