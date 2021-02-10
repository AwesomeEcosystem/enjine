<template>
  <div class="bg-gray-200 dark:bg-gray-800 px-4 py-32">
    <div class="container mx-auto flex flex-wrap justify-around">
      <Subscription class="md:1/5"/>
      <Social class="w-full md:w-3/5"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Subscription from './Subscription.vue';
import Social from './Social.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    Subscription,
    Social
  }
});
</script>

<style scoped>

</style>
