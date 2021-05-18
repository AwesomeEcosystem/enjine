<template>
  <div class="flex" :class="(wrap) ? 'flex-wrap' : 'flex-col'">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Main' })
export default class Main extends Vue {
  @Prop() wrap?: boolean;
}
</script>

<style scoped>
</style>
