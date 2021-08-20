<template>
  <section class="">
    <button class="" @click="triggerSettings()">
      <slot name="button"></slot>
    </button>
    <div class="absolute right-0
            w-screen h-screen md:w-64
            bg-gray-700
            shadow p-4"
      v-if="settings">
      <button class="flex"
        @click="triggerSettings()">
        <span class="w-2/3 ml-3">Settings</span>
        <div class="flex justify-end w-1/3 mr-3">
          x
        </div>
      </button>

      <div class="flex flex-col justify-between h-full mt-4 p-4">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Settings' })
export default class Settings extends Vue {
  public settings: boolean = false;

  triggerSettings() {
    this.settings = !this.settings;
  }
}
</script>

<style scoped>
</style>
