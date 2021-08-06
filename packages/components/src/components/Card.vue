<template>
  <div class="flex flex-wrap w-full md:flex-1 justify-around items-center bg-gray-700 break-all text-white rounded-xl m-2">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Card' })
export default class Card extends Vue {}
</script>

<style scoped>

</style>
