<template>
  <div class="flex flex-col justify-around my-24">
    <div class="flex flex-wrap justify-around">
      <a href="http://localhost:8080" target="_blank" title="Telegram">
        <img class="h-12" src="@/assets/icons/socialmedia/telegram.png" alt="Telegram">
      </a>
      <a href="http://localhost:8080" target="_blank" title="Discord">
        <img class="h-12" src="@/assets/icons/socialmedia/discord.png" alt="Discord">
      </a>
      <a href="http://localhost:8080" target="_blank" title="Twitter">
        <img class="h-12" src="@/assets/icons/socialmedia/twitter.png" alt="Twitter">
      </a>
      <a href="http://localhost:8080" target="_blank" title="Github">
        <img class="h-12" src="@/assets/icons/socialmedia/github.png" alt="Github">
      </a>
      <a href="http://localhost:8080" target="_blank" title="LinkedIn">
        <img class="h-12" src="@/assets/icons/socialmedia/linkedin.png" alt="LinkedIn">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Social',
});
</script>

<style scoped>

</style>
