<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="all()">Check</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Authentification, Session } from '@scale/session'

export default {
  name: 'App',
  data() {
    return {
      session: null,
      databases: []
    }
  },
  async mounted() {
    try {
      const auth = new Authentification({
        host: 'ws://localhost:9090',
        gateway: 'auth'
      })

      const token = await auth.login({ username: 'admin', password: 'admin' })

      this.session = new Session({
        host: 'ws://localhost:9090',
        gateway: 'data',
        auth: token
      })

    } catch (e) {
      console.log(e);
    }

  },
  methods: {
    async all() {
      this.session.emit('all', async (err, res) => {
        if (err) return console.log(err);
        this.databases = res;
      })
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
