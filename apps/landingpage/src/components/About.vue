<template>
  <div class="bg-gray-200 dark:bg-gray-800 py-12 px-4">
    <div class="container mx-auto py-8">
      <div class="text-center">
        <div class="">
          <div class="p-4">
            <h1>
              About
            </h1>
          </div>
          <div class="p-8">
            <p>
              Host your data on an instance you trust or host your own! Transparency, Open Source, Interoperability and Decentralization are the future.
              Lets build our Data Ecosystem together!
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap justify-around p-4">
        <div class="p-4">
          <h2>
            Scalability
          </h2>
        </div>
        <div class="">
          <h2>
            Distributed
          </h2>
        </div>
        <div class="">
          <h2>
            Data Flow
          </h2>
        </div>
      </div>
      <div class="flex flex-wrap justify-center">
        <button class="bg-gray-300 dark:bg-gray-700 rounded p-2 my-4 w-64">Read more</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>

<style scoped>

</style>
