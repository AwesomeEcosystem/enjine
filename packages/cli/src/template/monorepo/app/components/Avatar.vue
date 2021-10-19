<template>
  <div v-html="avatar(adress)">
  </div>
</template>

<script>
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-gridy-sprites';

export default {
  props: {
    adress: ''
  },
  methods: {
    avatar(str) {
      return createAvatar(style, {
        seed: str,
        // ... and other options
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
