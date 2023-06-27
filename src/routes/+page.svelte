<script>
   export let data
   const last_new = data.last_new
   const anons = data.anons

   // const me = data.me
   import { Card } from 'flowbite-svelte';
   import Mainphoto from '../assets/Main.svg';
   import gamepad from '../assets/gamepad.svg';
   import joystick from '../assets/joystick.svg';
   import console from '../assets/console.svg';
   import glasses from '../assets/vr.svg';
   import mario from '../assets/mario.svg';
   import { page } from '$app/stores'

   
   let vCard = false;
   
   // console.log({last_new})
   // console.log({anons})
   // import photo from "../assets/Dota2.jpg";
   
   </script>

   <div class="background">
     

     <div>
       <img src = {Mainphoto} class = "photo0"/>
       <img id = "rotate" class = "photo1" src = {gamepad} />
       <img  id = "pendulum1" class = "joystick" src = {joystick} />
       <img id = "pendulum2" class = "console" src = {console} />
       <img id = "rotate" class = "glasses" src = {glasses} />
       <img id = "mario"class = "light:color-black-800"  src = {mario} />

     </div>

   <!-- Блог с новостями -->
   <div>
     <div class="flex flex-col p-5 m-auto">    
       <a class="font-bold text-2xl" href="/news">Последние новости > </a>
     </div>
   {#each last_new as news}
     <div class="font-bold tracking-tight text-gray-900 dark:text-white">
       <Card href="/news/{news.id}" size='xl' class="bg-white dark:bg-gray-900 m-auto">
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-90ml-320 dark:text-white">
           {news.title}
         </h5>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
           {news.contain.substr(0,300).concat('...')}
         </p>
       </Card>
     
   </div>
   {/each}
 </div>

   <!-- Блог с анонсами -->

   <div class="flex flex-col p-5 ">      
     <a class="font-bold text-2xl"  href="/anons">Свежие анонсы</a>
   </div>

   <div class="flex flex-row p-5 m-5">
 
   {#each anons as anon}
     <div class="mb-6 flex ">
       <a href="/anons/{anon.id}" class=" flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-700">
       <img class="w-52 object-cover rounded-t-lg h-full" src="{anon.photo}" alt="лого компании">
       <div class="flex flex-col justify-between p-4 leading-normal" >
       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{anon.name}</h5>
       <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{anon.subscribe.substr(0, 150).concat('...')}</p>
       </div>
       </a>
     </div>
   {/each}
 </div>
</div>

<style>
a{
 color: #83D6ED;
 margin-left: 15%;
 margin-top: 5vh;
}
.background{
 background-image: url("../assets/background.svg");
 background-repeat: no-repeat; 
 margin-top: 10vh;
 background-size:90%;
 right: 0;
}

.cards{
 display: flex;
 flex-direction: row;
}

#pendulum1{
 animation: pendulum1 4s linear infinite;
 
}
@keyframes pendulum1 {
 0% {transform: rotate(0deg);}
 25% {transform: rotate(10deg);}
 50% {transform: rotate(0deg);}
 75% {transform: rotate(-10deg);}
 100% {transform: rotate(0deg);}
 
   /* from {
       transform: rotate(0deg); 

   }
   to {
       transform: rotate(180deg);
   } */
}

#pendulum2{
 animation: pendulum2 4s linear infinite;
 
}
@keyframes pendulum2 {
 0% {transform: rotate(-20deg);}
 25% {transform: rotate(-10deg);}
 50% {transform: rotate(0deg);}
 75% {transform: rotate(-10deg);}
 100% {transform: rotate(-20deg);}
 
   /* from {
       transform: rotate(0deg); 

   }
   to {
       transform: rotate(180deg);
   } */
}

 #rotate{
   animation-name: animation;
   animation: zoom 0.5s linear infinite;
   animation-iteration-count: 1;
   /* animation-name: animation2;
   animation-fill-mode: forwards;
   animation: zoom 2s linear infinite;
   animation-iteration-count: 1;
   animation-iteration-count: infinite; */
}


@keyframes zoom {
   from {
       transform: scale(0.1) rotate(0deg);

   }
   to {
       transform: scale(1) rotate(360deg);
   }
}

.photo0{
 position: relative;
 margin-left: auto;
 margin-right: auto;
 z-index: 1;
}

.photo1{
 position: absolute;
 margin-left: 45vh;
 top: 60vh;
 z-index: 2;
}
.glasses{
 position: absolute;
 margin-left: 120vh;
 top: 20vh;
 z-index: 2;
}
.console{
 position: absolute;
 margin-left: 127vh;
 margin-bottom: 0vh;
 top: 43.5vh;
 z-index: 2;
}
.joystick{
 position: absolute;
 margin-left: 45vh;
 top: 15vh;
 z-index: 2;
}

#mario{
 position: absolute;
 right: 0;
 top: 40vh;
 z-index: 2;
 color: black;
}

</style>