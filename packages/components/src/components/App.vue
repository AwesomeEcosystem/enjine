<template>
  <div class="w-sreen h-screen flex justify-around items-center bg-gray-800 text-white">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'App' })
export default class App extends Vue {
  created() {
    // this.$session.init();
    // if (!this.$session.ticket && this.auth) {
    //   this.$router.go(this.auth)
    // }
  }
}
</script>

<style scoped>

</style>
