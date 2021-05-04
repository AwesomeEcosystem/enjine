<template>
  <div class="bg-gray-700 py-4 px-8 rounded">
    <!-- <div class="">
      <p>Host {{ host }}</p>
      <p>Gateway {{ feed }}</p>
    </div> -->
    <div class="flex flex-wrap" v-if="feed" v-for="(doc, i) in feed">
      <div class="p-2">
        <p>{{ doc }}</p>
      </div>
    </div>
    <div class="flex justify-around items-center" v-else>
      <p>No Feed available</p>
    </div>
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
