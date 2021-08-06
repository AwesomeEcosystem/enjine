<template>
  <button class="flex justify-start items-center w-full rounded bg-gray-700 hover:bg-gray-600 m-2 p-2 text-lg"
    @click="$router.push(link())">
    <div class="w-12 px-2" v-if="icon">
      <i :class="`las la-${ icon }`"></i>
    </div>
    <div class="w-full px-2">
      <p>{{ page }}</p>
    </div>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'PageLink' })
export default class PageLink extends Vue {
  @Prop() public page: string = '';
  @Prop() public icon?: string = '';

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
