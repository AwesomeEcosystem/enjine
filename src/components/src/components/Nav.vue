<template>
  <div class="flex justify-around">
    <div class="flex justify-around items-center w-1/6">
      <slot name="left"></slot>
    </div>
    <div class="flex justify-around items-center w-full">
      <slot name="middle"></slot>
    </div>
    <div class="flex justify-around items-center w-1/6">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {}
</script>

<style scoped>
</style>
