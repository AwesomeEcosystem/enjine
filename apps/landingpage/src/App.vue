<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Cover/>
    <About/>
    <Ecosystem/>
    <Technologies/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cover from './components/Cover/index.vue';
import About from './components/About.vue';
import Ecosystem from './components/Ecosystem.vue';
import Technologies from './components/Technologies.vue';
import Footer from './components/Footer/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    Cover,
    About,
    Ecosystem,
    Technologies,
    Footer
  }
});
</script>

<style>
</style>
