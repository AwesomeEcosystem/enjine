<template>
  <div class="w-12 px-2" v-if="icon">
    <i :class="`las la-${ icon }`"></i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Icon' })
export default class Icon extends Vue {
  @Prop() public icon?: string = '';
}
</script>

<style scoped>

</style>
