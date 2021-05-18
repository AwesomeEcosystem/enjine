<template>
  <div class="flex w-full h-auto justify-around bg-gray-800 text-white rounded-xl md:mx-4 my-4 p-4"
    :class="(wrap) ? 'flex-wrap' : 'flex-col'">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Container' })
export default class Container extends Layer {
  @Prop() wrap?: boolean;
}
</script>

<style scoped>

</style>
