<template>
  <div class="">
    <table class="table-auto">
      <thead class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2">
        <tr>
          <th>Username</th>
          <th>ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="(user, i) in data">
        <tr>
          <td>{{ user.username }}</td>
          <td>{{ user._id }}</td>
          <td><button @click="remove(user._id)">Remove</button></td>
        </tr>
      </tbody>
    </table>
    <div class="">
      <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2"
        v-model="credentials.username"
        placeholder="Username">
      <input class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded p-2"
        v-model="credentials.password"
        @keyup.enter="post(credentials)"
        placeholder="Password">
    </div>
  </div>
</template>

<script>
import { Auth, Session } from '@scale/session'

export default {
  name: 'Users',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      data: []
    }
  },
  mounted() {
    this.$store.state.sessions.user.emit('all', (err, res) => {
      if (err) return console.log(err);
      this.data = res;
    })

    this.$store.state.sessions.user.on('register', (doc) => {
      this.data.push(doc);
    })

    this.$store.state.sessions.user.on('remove', (id) => {
      const filtered = this.data.filter(d => d._id != id);
      this.data = filtered;
    })
  },
  methods: {
    post(credentials) {
      this.$store.state.sessions.user.emit('register', credentials, (err, res) => {
        if (err) return console.log(err);
      })
      this.credentials = {
        username: '',
        password: ''
      }
    },
    remove(id) {
      this.$store.state.sessions.user.emit('remove', id, (err, res) => {
        if (err) return console.log(err);
      })
    }
  }
}
</script>
