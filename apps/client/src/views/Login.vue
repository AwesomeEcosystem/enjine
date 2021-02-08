<template>
  <div class="">
    Login
    <div class="flex flex-wrap item-center">
      <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 my-2 w-full" v-model="username" placeholder="Username">
      <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2 my-2 w-full" v-model="password" placeholder="Password" @keyup.enter="login({ username, password })">
      <button class="my-2" @click="login({ username, password })">Login</button>
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
    async login(credentials) {
      try {
        await this.$session.login(credentials)
        this.$router.push('/')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
