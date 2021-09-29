<template>
  <Container>

    <div class="flex flex-col justify-around items-center">
      <img
        class="w-24 rounded-full"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQGWmKb5bGho8Q/company-logo_200_200/0/1630482349668?e=1639612800&v=beta&t=c_tMpCx47EqWxWb8wQEmNDS0uvqaeZ0nYd3Ks-P8sEo"
        alt=""/>
      <h1 class="text-6xl p-2"><%= name %></h1>
    </div>

    <div class="flex flex-wrap">
      <Card class="flex flex-col h-32 p-4" v-if="!created">
        <p>Create or Import an Account</p>
        <button class="bg-green-500 py-2 px-4 m-2 rounded font-bold" @click="getStarted()">Get Started</button>
      </Card>
      <Card class="flex flex-wrap md:w-1/4 h-auto py-2  " v-else>
        <input class="w-full bg-gray-600 py-2 p-4 m-2 rounded" v-model="password" placeholder="Enter your Password">
        <button class="w-full bg-green-500 py-2 p-4 m-2 rounded font-bold" @click="create()">Login</button>
      </Card>
    </div>

    <!-- <Card class="flex flex-wrap justify-around items-center">
      <div class="hidden md:block flex-1" v-if="metamask">
        <button class="flex flex-wrap justify-around items-center w-32 h-32 bg-gray-500 py-2 p-4 m-2 rounded font-bold" @click="metamask()">
            <img class="w-full" src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Metamaski">
            Metamask
        </button>
      </div>
      <div class="flex flex-wrap justify-around items-center w-full md:flex-1 m-2 p-2">
        <button class="w-full bg-blue-500 py-2 p-4 m-2 rounded font-bold" @click="mod('login')">Login</button>
        <button class="w-full bg-blue-500 py-2 p-4 m-2 rounded font-bold" @click="mod('create')">Create</button>
      </div>
      <div class="" v-if="mode === 'login'">
        <input v-model="username" placeholder="Username"/>
        <input v-model="password" placeholder="Password"/>
        <button class="bg-green-500 py-2 p-4 m-2 rounded font-bold">Login</button>
      </div>
      <div class="" v-if="mode === 'create'">
        <input v-model="username" placeholder="Username"/>
        <input v-model="mail" placeholder="E-Mail"/>
        <input v-model="password" placeholder="Password"/>
        <button class="bg-green-500 py-2 p-4 m-2 rounded font-bold">Create</button>
      </div>
      <div class="">
      </div>
    </Card> -->

  </Container>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      username:'',
      mail:'',
      password:'',
      created: false,
      metamask: false,
      mode: '',
    }
  },
  async beforeMount() {
    console.log(this.$account);
    // await this.$coon.loadAccounts()
    // // if (this.$coon.accounts[0]) {
    // //   this.created = true;
    // // }
  },
  mounted() {
    if (window.ethereum) {
      this.metamask = true
    }
  },
  methods: {
    mod(str) {
      this.mode = str;
    },
    async getStarted() {

    },
    async create() {
      // if (this.creds === this.password) { // Temporaly
      //   await this.$coon.createAccount()
      //   await this.$coon.loadAccounts()
      // }
    },

    async login() {
      // if (this.creds === this.password) { // Temporaly
      //   await this.$coon.createAccount()
      //   await this.$coon.loadAccounts()
      // }
      this.$router.push('/')
    },
    metamask() {
      if (this.$moralis) {
        this.$moralis.authenticate().then((user) => {
          this.$moralis.accounts = user.attributes.accounts
          this.accounts = user.attributes.accounts
        })
      }
    }
  }
}
</script>
