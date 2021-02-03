<template>
  <div class="">
    {{ data }}
    <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2" v-model="text" @keyup.enter="post(text)">
  </div>
</template>

<script>
import { Auth, Session } from '@scale/session'

export default {
  name: 'Users',
  data() {
    return {
      data: [],
      text: ''
    }
  },
  mounted() {
    this.$store.state.sessions.user.emit('all', (err, res) => {
      if (err) return console.log(err);
      this.data = res;
    })

    this.$store.state.sessions.user.on('post', (doc) => {
      this.data.push(doc);
    })
  },
  methods: {
    post(text) {
      this.$store.state.sessions.user.emit('post', text, (err, res) => {
        if (err) return console.log(err);
        console.log(res);
      })
      this.text = ''
    }
  }
}
</script>
