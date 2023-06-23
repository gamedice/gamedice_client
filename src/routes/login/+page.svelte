<script>
    import { Label, Input, Button,Textarea } from 'flowbite-svelte';
    import {enhance} from '$app/forms'
    import { page } from '$app/stores'
    export let data;
    const me = data.user?.me
  export let form;
  import { onMount } from 'svelte';
  import { saveData } from '../../lib/actions';



  </script>
  <div>
  </div>
  <div class="form">
  {#if !form?.message_success}
    <h1 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white title_wrap">
      Войти в аккаунт
    </h1>
    {#if form?.message_error}<p class="text-red-500">
        Форма заполнена некорректно: ошибка {form.message_error}
      </p>{/if}

      <form method="POST" action="?/login" enctype="multipart/form-data" use:enhance>

    
      {#if form?.missing_email}<p class="text-red-500">Обязательное поле</p>{/if}
      <Input class = "mb-5" id="email" placeholder="username" name = 'username' >
        <!-- <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> -->
        </Input>
         
      {#if form?.missing_password}<p class="text-red-500">Обязательное поле</p>{/if}
      <Input id="Password"placeholder="Password" name = 'password'>
        <!-- <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" 
        fill="currentColor" viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> -->
        </Input>
      <!-- <input
        type="file"
        class="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        accept="image/*"
        name="photo"
      /> -->
      <div class="flex items-center mb-4">
      </div>
      <Button  type="submit" color="light">Отправить</Button>
   

</form>
  {:else}
    <h1 class="text-2xl font-bold text-green-600">Успешно, <a href="/blog">перейти к блогу</a></h1>
    
  {/if}

</div>

<style>

    .form{
        width:350px;
        justify-content: center;
        margin:auto;
        margin-top: 15vh;
        margin-bottom: 15vh;
    }
    
</style>