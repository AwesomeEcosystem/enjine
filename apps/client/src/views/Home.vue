<template>
  <div class="">
    {{ ticket }}
    {{ data }}
    <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2" v-model="text" @keyup.enter="post(text)">
  </div>
</template>

<script>
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

  },
  methods: {
    post(text) {
      this.session.emit('post', text, (err, res) => {
        if (err) return console.log(err);
        console.log(res);
      })
      this.text = ''
    }
  }
}
</script>
