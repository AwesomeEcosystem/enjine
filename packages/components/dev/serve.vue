<script lang="ts">
import Vue from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { ComponentsSample } from '@/entry.esm';

export default Vue.extend({
  name: 'ServeDev',
  // components: {
  //  ComponentsSample,
  // }
});
</script>

<template>
  <div id="app">
    <components-sample />
  </div>
</template>
