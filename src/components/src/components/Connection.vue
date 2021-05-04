<template>
  <div>
    <!-- <div class="">
      <p>Host {{ host }}</p>
      <p>Gateway {{ gateway }}</p>
    </div> -->
    <div class="flex bg-gray-700 py-4 px-8 rounded" v-if="gateway">
      <p class="text-green-500 pr-4">◉</p>
      <p>Connected</p>
    </div>
    <div class="flex bg-gray-700 py-4 px-8 rounded" v-else>
      <p class="text-red-500 pr-4">◉</p>
      <p>Disconnected</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Connection extends Vue {
  @Prop() gateway!: any;
}

</script>
