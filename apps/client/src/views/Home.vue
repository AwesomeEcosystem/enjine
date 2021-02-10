<template>
  <div class="w-full">
    <div class="w-full bg-gray-100 dark:bg-gray-900 rounded p-8 my-4">
      <div class="" v-for="(d, i) in feed">
        <div class="p-2" v-if="!editing">
          {{ d.data }}
        </div>
        <div class="" v-else>
          <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2" v-model="d.data" @keyup.enter="update(d)">
        </div>
        <!-- <button @click="remove(d._id)">Remove</button>
        <button @click="edit()">Edit</button> -->
      </div>
    </div>
    <div class="">
      <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded w-full p-2" v-model="text" @keyup.enter="post(text)" autofocus placeholder="Write something ..">
    </div>
  </div>
</template>

<script>
import { Auth, Session } from '@ecosis/session'

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
    this.$session.gateway.data.emit('all', (feed) => {
      this.feed = feed;
    })

    this.$session.gateway.data.on('error', (err) => {
      alert(err)
    })

    this.$session.gateway.data.on('post', (data) => {
      this.feed.push(data);
    })

    this.$session.gateway.data.on('update', (data) => {
      const feed = this.feed.map((obj) => (obj._id === data._id) ? obj = data : obj);
      this.feed = feed;
    })

    this.$session.gateway.data.on('remove', (id) => {
      const filtered = this.feed.filter(d => d._id != id);
      this.feed = filtered;
    })

    console.log(this.$session);
  },
  methods: {
    edit() {
      this.editing = !this.editing;
    },
    post(data) {
      this.$session.gateway.data.emit('post', data)
      this.text = ''
    },
    update(data) {
      this.$session.gateway.data.emit('update', data)
      this.text = ''
      this.edit();
    },
    remove(id) {
      this.$session.gateway.data.emit('remove', id)
    }
  }
}
</script>
