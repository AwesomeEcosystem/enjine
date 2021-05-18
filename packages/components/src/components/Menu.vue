<template>
  <div class="">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Menu' })
export default class Menu extends Vue {}
</script>

<style scoped>
</style>
