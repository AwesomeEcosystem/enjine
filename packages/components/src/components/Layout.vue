<template>
  <div class="flex w-full h-full">
    <div v-if="menu" class="hidden md:block m-4 w-1/6">
      <slot name="menu"></slot>
    </div>
    <div class="flex flex-col w-full h-full">
      <div v-if="nav" class="m-2">
        <slot name="nav"></slot>
      </div>
      <div class="bg-gray-900 w-full h-full rounded-xl overflow-y-auto md:px-4 py-4">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  @Prop() menu?: boolean;
  @Prop() nav?: boolean;
}
</script>

<style scoped>

</style>
