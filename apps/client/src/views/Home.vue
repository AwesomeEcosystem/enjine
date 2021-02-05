<template>
  <div class="">
    <div class="">
      <div class="" v-for="(d, i) in feed">
        <div class="" v-if="!editing">
          {{ d.data }}
        </div>
        <div class="" v-else>
          <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2" v-model="d.data" @keyup.enter="update(d)">
        </div>
        <button @click="remove(d._id)">Remove</button>
        <button @click="edit()">Edit</button>
      </div>
    </div>
    <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2" v-model="text" @keyup.enter="post(text)">
  </div>
</template>

<script>
import { Auth, Session } from '@scale/session'

export default {
  name: 'Home',
  data() {
    return {
      editing: false,
      editor: '',
      text: '',
      feed: []
    }
  },
  mounted() {
    this.$store.state.sessions.data.emit('all', (feed) => {
      this.feed = feed;
    })

    this.$store.state.sessions.data.on('error', (err) => {
      alert(err)
    })

    this.$store.state.sessions.data.on('post', (data) => {
      this.feed.push(data);
    })

    this.$store.state.sessions.data.on('update', (data) => {
      const feed = this.feed.map((obj) => (obj._id === data._id) ? obj = data : obj);
      this.feed = feed;
    })

    this.$store.state.sessions.data.on('remove', (id) => {
      const filtered = this.feed.filter(d => d._id != id);
      this.feed = filtered;
    })
  },
  methods: {
    edit() {
      this.editing = !this.editing;
    },
    post(data) {
      this.$store.state.sessions.data.emit('post', data)
      this.text = ''
    },
    update(data) {
      this.$store.state.sessions.data.emit('update', data)
      this.text = ''
      this.edit();
    },
    remove(id) {
      this.$store.state.sessions.data.emit('remove', id)
    }
  }
}
</script>
