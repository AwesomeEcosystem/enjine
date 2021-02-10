<template>
  <div class="flex flex-col p-4">
    <h3>
      Subscribe
    </h3>
    <input class="bg-gray-300 dark:bg-gray-700 rounded p-2 my-2" type="text" placeholder="E-Mail">
    <p class="text-gray-600 dark:text-gray-400">
      Your E-Mail-Adress will be used only for Newsletter by ecosis.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Subscription',
});
</script>

<style scoped>

</style>
