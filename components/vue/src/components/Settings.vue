<template>
  <div class="absolute right-0
              w-screen h-screen md:w-64
              bg-gray-200 dark:bg-gray-700
              shadow p-4"
    v-if='settings'>
    <div class="flex"
      @click="triggerSettings()">
      <span class="w-2/3 ml-3">Settings</span>
      <div class="flex justify-end w-1/3 mr-3">
        x
      </div>
    </div>

    <div class="flex flex-col justify-between h-full mt-4 p-4">

      <ColorModePicker/>

      <div class="flex flex-col">
        <div class="flex flex-col justify-center content-center text-center w-full"
          @click="$router.push('home')">
          <div class="flex justify-center w-full">
            <Avatar class="w-32" :avatar="$session.ticket.user"/>
          </div>
          <span class="w-full pt-2">Profile</span>
        </div>

        <div class="w-full text-center mb-12">
          <button class="w-full"
            type="button"
            name="Logout"
            @click="logout()">
            Logout
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Settings extends Vue {}
</script>

<style scoped>
</style>
