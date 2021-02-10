<template>
  <div class="bg-gray-100 dark:bg-gray-900 py-2">
    <div class="container mx-auto">
      <div class="flex flex-wrap justify-around px-4 py-12">
        <div class="flex flex-col justify-center  md:w-1/3">
          <div class="mt-4 pt-4">
            <h1>ecosis</h1>
          </div>
          <div class="mb-4">
            <p>Realtime Distributed Interoperable Data Instance Ecosystem</p>
          </div>
          <div class="flex flex-col py-8">
            <button class="bg-gray-300 dark:bg-gray-700 rounded p-2 my-4 w-32">Get startet</button>
          </div>
        </div>
        <div class="md:w-2/3">
          <Illustration/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Illustration from './Illustration.vue';

export default defineComponent({
  name: 'Cover',
  components: {
    Illustration
  }
});
</script>

<style scoped>

</style>
