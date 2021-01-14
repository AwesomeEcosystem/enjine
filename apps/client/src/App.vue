<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import { Session } from '@scale/session'
import io from 'socket.io-client'

export default {
  name: 'App',
  data() {
    return {
      session: null
    }
  },
  mounted() {
    // this.session = new Session({
    //   host: 'ws://localhost:9090',
    //   instance: 'dev',
    //   gateway: 'playground'
    // })
    this.session = io('ws://localhost:9090')
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
