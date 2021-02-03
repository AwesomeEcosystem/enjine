<template>
  <div class="">
    Login
    <div class="">
      <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2" v-model="username" placeholder="Username">
      <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2" v-model="password" placeholder="Password" @keyup.enter="login({ username, password })">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login(creds) {
      await this.$store.dispatch('login', creds)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
