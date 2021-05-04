<template>
  <div class="flex flex-wrap bg-gray-700 py-4 px-8 m-2 rounded text-white">
    <slot name="top"></slot>

    <div class="flex flex-wrap">
      <div class="" v-if="gateway" v-for="(doc, i) in data">
        <div class="p-2">
          <slot>{{ doc }}</slot>
        </div>
      </div>
      <div class="flex justify-around items-center" v-else>
        <p>No Feed available</p>
      </div>
    </div>

    <slot name="buttom"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Feed extends Vue {
  @Prop() gateway!: any;

  data: any[] = [];

  mounted() {

    this.gateway.emit('all', (arr: any[]) => this.data = arr);

    this.gateway.on('post', (obj: any[]) => this.data.post(obj));
    this.gateway.on('update', (obj: any[]) => this.data.update(obj));
    this.gateway.on('remove', (obj: any[]) => this.data.remove(obj));
  }
}

</script>
