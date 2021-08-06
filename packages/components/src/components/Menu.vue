<template>
  <div class="flex flex-wrap w-full m-2 p-2">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Menu' })
export default class Menu extends Vue {}
</script>

<style scoped>
</style>
