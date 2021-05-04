<template>
  <div class="flex flex-wrap bg-gray-700 py-4 px-8 m-2 rounded text-white">
    <Feed :feed="session.gateway.data" v-slot="{ doc }">
      <Card>{{ doc }}</Card>
    </Feed>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Feed extends Vue {
  @Prop() session!: any;
}

</script>
