<template>
  <div class="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-w-screen">
    <div class="container mx-auto p-2 min-h-screen flex">
      <div class="">
        <router-link to="/">Home</router-link> |
        <router-link to="/usermanager">Usermanager</router-link>
      </div>
      <div class="flex flex-col justify-center w-full">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  async mounted() {
    await this.$session.init()
    this.$session.add({
      host: '192.168.1.183:9090',
      gateway: 'data'
    })
    this.$session.add({
      host: '192.168.1.183:9090',
      gateway: 'user'
    })
  }
}
</script>

<style>
</style>
