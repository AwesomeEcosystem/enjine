<template>
  <button class="w-full rounded bg-gray-700 hover:bg-gray-600 m-2 p-2"
    @click="$router.push(link())">
    {{ to }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'PageLink' })
export default class PageLink extends Vue {
  @Prop() to: string;

  link() {
    const page = this.to.toLowerCase();
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
