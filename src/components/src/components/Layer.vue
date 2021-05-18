<template>
  <div class="flex w-full h-full">
    <div v-if="menu" class="hidden md:block m-4 w-1/6">
      <slot name="left">
        <div class="">
        </div>
      </slot>
    </div>
    <div class="flex flex-col w-full h-full">
      <div v-if="nav" class="m-2">
        <slot name="top">
          <div class="">

          </div>
        </slot>
      </div>
      <div class="bg-gray-900 w-full h-full rounded-xl overflow-y-auto md:px-4 py-4">
        <slot>
          <div class="">

          </div>
        </slot>
      </div>
      <div class="bg-gray-900 w-full h-full rounded-xl overflow-y-auto md:px-4 py-4">
        <slot name="buttom">
          <div class="">

          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Layer' })
export default class Layer extends Vue {}
</script>

<style scoped>

</style>
