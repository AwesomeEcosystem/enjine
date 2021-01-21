<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="all()">Check</button>
    <button @click="post()">Post</button>
    {{ data }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Auth, Session } from '@scale/session'

export default {
  name: 'App',
  data() {
    return {
      session: null,
      data: []
    }
  },
  async mounted() {
    try {
      const auth = new Auth({
        host: 'ws://localhost:9090',
        gateway: 'auth'
      })

      const ticket = await auth.login({ username: 'admin', password: 'admin' })

      console.log(ticket);

      this.session = new Session({
        host: 'ws://localhost:9090',
        gateway: 'user',
        auth: 'ticket'
      })

    } catch (e) {
      console.log(e);
    }

  },
  methods: {
    async all() {
      this.session.socket.emit('all', (err, res) => {
        if (err) return console.log(err);
        this.data = res;
      })
      // this.session.emit('all', async (err, res) => {
      //   if (err) return console.log(err);
      //   this.data = res;
      // })
    },
    async post() {
      this.session.emit('post', { username: 'admin', password: 'admin' }, async (err, res) => {
        if (err) return console.log(err);
        this.data = res;
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
