<script>
    import { Label, Input, Button,Textarea } from 'flowbite-svelte';
    import {enhance} from '$app/forms'
    function handleClick() {
		
	}
  export let form;

    // const signup = () => {
    //     fetch('http://127.0.0.1:8000/profile/auth/users/', {
    //         method: 'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({username:username, email:email, password:password})
    //     })
    //     .then((res) => {
    //         if(res.status<299) return(res.json)
    //         if(res.status>299) currentError = 'Error'
    //     })
    // }

  </script>

  {#if !form?.message_success}
    <h1 class="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white title_wrap">
      <!-- Добавить новый пост -->
    </h1>
    {#if form?.message_error}<p class="text-red-500">
        Форма заполнена некорректно: ошибка {form.message_error}
      </p>{/if}

      <form method="POST" action="?/new_user" enctype="multipart/form-data" use:enhance>
    <div class="form">
    
      {#if form?.missing_email}<p class="text-red-500">Обязательное поле</p>{/if}
      <Input class = "mb-5" id="email" type="email" placeholder="name@email.com" name = 'email' >
        <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
        </Input>
      {#if form?.missing_username}<p class="text-red-500">Обязательное поле</p>{/if}
      <Input class = "mb-5" id="Username" placeholder="Username" name = 'username' >
        <!-- <svg slot="left" aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" 
        fill="currentColor" viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> -->
        </Input>      
      {#if form?.missing_password}<p class="text-red-500">Обязательное поле</p>{/if}
      <Input class = "mb-5"  id="Password"placeholder="Password" name = 'password'>
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
        <!-- <input
          type="checkbox"
          name="is_published"
          id="link-checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Опубликовать
        </label> -->
      </div>
      <Button type="submit" color="light">Отправить</Button>
   
  </div>
</form>
  {:else}
    <h1 class="text-2xl font-bold text-green-600">Успешно, <a href="/blog">перейти к блогу</a></h1>
  {/if}



<style>

    .form{
        width:350px;
        justify-content: center;
        margin:auto;
        margin-top: 15vh;
        margin-bottom: 15vh;
    }
    
</style>