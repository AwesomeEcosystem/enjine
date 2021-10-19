<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-8 rounded-full"
              src="~/assets/logos/logo.png"
            >
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline" v-for="page in pages" :key="page" v-if="pages">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
              >{{ page }}</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
<!--        TODO Notifications
            <button
              class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
              aria-label="Notifications"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button> -->

            <!-- Profile dropdown -->
            <div class="ml-3 relative bg-gray-800">
              <div>
                <button
                  @click="toggle"
                  class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-solid"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img :src="profile.img" v-if="profile.img">
                  <Avatar class="w-8" :address="'proto'" v-else/>
                </button>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  v-show="isOpen"
                  class="origin-top-right absolute bg-gray-900 right-0 m-2 w-48 rounded-md shadow-lg"
                >
                  <div
                    class="p-4 rounded-md shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <div class="" v-for="option in options" :key="option" v-if="options">
                      <a
                        href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >{{ option }}</a>
                    </div>
                      <div class="flex items-center px-5 py-8">
                        <div class="flex-shrink-0">
                          <img :src="profile.img" v-if="profile.img">
                          <Avatar class="w-12" :address="'proto'" v-else/>
                        </div>
                        <div class="ml-3">
                          <div class="text-base font-medium leading-none text-white" v-if="profile.name">{{ profile.name }}</div>
                        </div>
                      </div>
                    <button class="w-full hover:bg-gray-800 text-center rounded-lg p-2" @click="logout()">
                      <p>Sign Out</p>
                      <i class="las la-sign-out-alt text-3xl"></i>
                    </button>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button
            @click="toggle"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
          >
            <svg
              :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <svg
              :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
      <div class="px-2 pt-2 pb-3 sm:px-3" v-for="page in pages" v-if="pages">
        <a
          href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
        >{{ page }}</a>
      </div>
      <div class="p-4  border-t border-gray-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img :src="profile.img" v-if="profile.img">
            <Avatar class="w-12" :address="profile.name" v-else/>
          </div>
          <div class="ml-3">
            <div class="text-base font-medium leading-none text-white" v-if="profile.name">{{ profile.name }}</div>
          </div>
        </div>
        <div class="mt-3 px-2">
          <div class="" v-for="option in options" :key="option" v-if="options">
            <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            >{{ option }}</a>
          </div>
          <button class="w-full hover:bg-gray-700 text-center rounded-lg p-2 m-2" @click="logout()">
            <p>Sign Out</p>
            <i class="las la-sign-out-alt text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    pages: Array,
    options: Array
  },
  data() {
    return {
      profile: {
        name: '',
        img: ''
      },
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
    async logout() {
      this.$router.push('start')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
