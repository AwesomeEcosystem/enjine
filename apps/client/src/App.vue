<template>
  <div class="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
    <div class="">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { Auth, Session } from '@scale/session'

export default {
  async mounted() {
    try {
      await this.$store.dispatch('init')
    } catch (e) {
      console.log(e);
    } finally {
      if (this.$store.getters.isAuth) {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
</style>
