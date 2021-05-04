<template>
  <div class="flex flex-wrap bg-gray-700 py-4 px-8 m-2 rounded text-white">
    <slot name="top"></slot>

    <div class="flex flex-wrap">
      <div class="" v-if="feed" v-for="(doc, i) in feed">
        <div class="p-2">
          <p>{{ doc }}</p>
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
  @Prop() feed!: any;

  data: any[] = [];

  mounted() {

    this.feed.emit('all', (arr: any[]) => this.data = arr);

    this.feed.on('post', (obj: any[]) => this.data.post(obj));
    this.feed.on('update', (obj: any[]) => this.data.update(obj));
    this.feed.on('remove', (obj: any[]) => this.data.remove(obj));
  }
}

</script>
