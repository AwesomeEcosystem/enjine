<template>
  <div class="">
    {{ ticket }}
    {{ data }}
    <input v-model="text" @keyup.enter="post(text)">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { Auth, Session } from '@scale/session'

export default {
  name: 'Home',
  data() {
    return {
      ticket: null,
      session: null,
      data: [],
      text: ''
    }
  },
  async mounted() {
    const auth = new Auth({
      host: 'localhost:9090',
      gateway: 'auth'
    })

    this.ticket = await auth.login({ username: 'admin', password: 'admin' })
    console.log(this.ticket);
    this.session = new Session({
      host: 'localhost:9090',
      gateway: 'data',
      ticket: this.ticket
    })

    this.session.socket.emit('all', (err, res) => {
      if (err) return console.log(err);
      this.data = res;
    })

    this.session.socket.on('post', (doc) => {
      console.log(doc);
      this.data.push(doc)
    })
  },
  methods: {
    post(text) {
      this.session.socket.emit('post', text, (err, res) => {
        if (err) return console.log(err);
        console.log(res);
      })
      this.text = ''
    }
  },
  components: {
    HelloWorld
  }
}
</script>
