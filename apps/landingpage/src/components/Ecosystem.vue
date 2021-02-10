<template>
  <div class="p-4">
    <div class="container mx-auto flex flex-col justify-around">
      <div class="text-center pt-12 mb-24">
        <h1>
          Ecosystem
        </h1>
        <p>

        </p>
      </div>
      <div class="flex flex-wrap justify-around text-center">
        <div class="">
          <a href="#Ecosystem">
            <img class="h-32 rounded-full" src="@/assets/icons/ecosis/ecosis.png" alt="">
            <p class="text-gray-400 dark:text-gray-400 pt-4">
              App
            </p>
            <h2>
              one
            </h2>
          </a>
        </div>
        <div class="">
          <a href="#Ecosystem">
            <img class="h-32 rounded-full" src="@/assets/icons/ecosis/passliq.jpg" alt="">
            <p class="text-gray-400 dark:text-gray-400 pt-4">
              App
            </p>
            <h2>
              passlr
            </h2>
          </a>
        </div>
        <div class="">
          <a href="#Ecosystem">
            <img class="h-32 rounded-full" src="@/assets/icons/ecosis/scale.png" alt="">
            <p class="text-gray-400 dark:text-gray-400 pt-4">
              Framework
            </p>
            <h2>
              scale
            </h2>
          </a>
        </div>
      </div>
      <div class="flex justify-center pt-16">
        <p>
          Develop your own Application and connect it to the ecosystem!
        </p>
      </div>
      <div class="flex justify-center pt-8">
        <button class="bg-gray-300 dark:bg-gray-700 rounded p-2 my-4 w-64">Get startet</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Ecosystem',
});
</script>

<style scoped>

</style>
