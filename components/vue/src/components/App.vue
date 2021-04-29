<template>
  <div class="w-sreen h-screen flex justify-around items-center bg-gray-800 text-white">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>

<style scoped>

</style>
