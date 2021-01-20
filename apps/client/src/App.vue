<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="check()">Check</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Connection, Session } from '@scale/session'
import io from 'socket.io-client'

export default {
  name: 'App',
  data() {
    return {
      session: null
    }
  },
  mounted() {
    // this.connection = new Connection({
    //   host: 'ws://localhost:9090',
    //   credentials: {
    //     username: 'admin',
    //     password: 'admin'
    //   }
    // })
    // this.session = new Session(connection, {
    //   gateway: 'playground'
    // })
    this.session = io('ws://localhost:9090/auth', {
      query: {
        login: { username: 'admin', password: 'admin' }
      }
    })
  },
  methods: {
    check() {
      this.session.emit('check', 'Check!')
    }
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
