<template>
  <button class="w-full rounded bg-gray-700 hover:bg-gray-600 m-2 p-2"
    @click="$router.push(link())">
    {{ page }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'PageLink' })
export default class PageLink extends Vue {
  @Prop() page: string;

  link() {
    const page = this.page.toLowerCase();
    if (page === 'home') {
      return '/'
    } else {
      return page
    };
  }
}
</script>

<style scoped>
</style>
