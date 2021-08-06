<template>
  <div class="flex w-full h-full">
    <div class="hidden md:block m-4 w-1/6">
      <slot name="menu"></slot>
    </div>
    <div class="flex flex-col w-full h-full">
      <div class="m-2">
        <slot name="nav"></slot>
      </div>
      <div class="bg-gray-900 w-full h-full rounded-xl overflow-y-auto md:px-4 py-4">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Layout' })
export default class Layout extends Vue {}
</script>

<style scoped>

</style>
