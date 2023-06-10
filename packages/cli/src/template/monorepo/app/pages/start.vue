<template>
  <App class="flex flex-wrap bg-gray-800">
    <Container class="bg-gray-900">
      <div class="flex flex-col justify-around items-center py-8">
        <img
          class="w-32 rounded-full my-4"
          src="~/assets/logos/logo.png"
          alt=""/>
        <h1 class="text-5xl font-thin p-2"><%= name %></h1>
      </div>

      <div class="flex flex-wrap justify-around items-center">
        <button class="flex flex-wrap justify-around items-center text-center bg-gray-800 hover:bg-gray-700 h-32 p-4 rounded-lg" v-if="!manage" @click="getStarted()">
          <p class="w-full">Login or Register</p>
          <div class="py-2 px-4 mb-2 rounded">
            <h1 class="text-6xl font-thin">+</h1>
          </div>
        </button>
      </div>
      <div class="flex flex-wrap justify-around items-center" v-if="manage">
        <section class="w-full md:w-1/3 bg-gray-800 shadow-inner rounded-xl p-2 m-4">
          <div class="flex flex-wrap w-full" @submit="(manage === 'login') ? login() : register()">
            <input class="w-full bg-transparent p-4 active:border-b border-gray-600" v-model="username" placeholder="Username">
            <input class="w-full bg-transparent p-4 active:border-b border-gray-600" v-model="mail" v-if="manage === 'register'" placeholder="E-Mail">
            <input class="w-full bg-transparent p-4 active:border-b border-gray-600" v-model="password" placeholder="Password" type="password">
            <input class="w-full bg-transparent p-4 active:border-b border-gray-600" v-model="password2" v-if="manage === 'register'" placeholder="Confirm Password" type="password">
            <button class="w-full bg-green-600 hover:bg-green-500 rounded-xl p-2 m-2" v-if="full()" @click="(manage === 'login') ? login() : register()">
              {{ capitalizeFirstLetter(manage) }}
            </button>
          </div>
        </section>
        <button class="w-full text-center" @click="change()">
          {{ (manage === 'login') ? 'Register instead' : 'Login instead' }}
        </button>
      </div>
    </Container>
  </App>
</template>

<script>
export default {
  data() {
    return {
      manage: '',
      username: '',
      mail: '',
      password: '',
      password2: ''
    }
  },
  methods: {
    async register() {
        try {
          if (this.password !== this.password2) {
            throw new Error('Passwords are not identical!')
          }

          // await Register Logic here

          this.$toast.success('Registered!')
          this.change()

        } catch (error) {
          this.$toast.error(error.message);
        }
    },
    async login() {
      const user = true // Login Logic here

      if (user) {
        this.$router.push('/')
      }
    },
    getStarted() {
      this.manage = 'login';
    },
    change() {
      (this.manage === 'login') ? this.manage = 'register' : this.manage = 'login';
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    full() {
      if (this.manage === 'login' && this.username && this.password) {
        return true
      } else if (this.manage === 'register' && this.username && this.mail && this.password && this.password2) {
        return true
      }
    }
  }
}
</script>
