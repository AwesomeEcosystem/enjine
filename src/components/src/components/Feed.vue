<template>
  <div class="flex flex-wrap bg-gray-700 py-4 px-8 m-2 rounded text-white">
    <slot name="top"></slot>

    <div class="flex flex-wrap">
      <div class="" v-if="gateway || controller" v-for="(doc, i) in feed">
        <slot>
          <div class="p-2">
            {{ doc }}
          </div>
        </slot>
      </div>
      <div class="flex justify-around items-center" v-else>
        <p>No {{ (!gateway && !controller) ? 'Connection' : 'Data' }} available</p>
      </div>
    </div>

    <slot name="buttom"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';

@Component({ name: 'Feed' })
export default class Feed extends Connection {}
</script>
