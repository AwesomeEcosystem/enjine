<template>
  <section>
    <Container>
      <Feed :gateway="gateway" v-slot="{ doc }">
        <Card>{{ doc }}</Card>
      </Feed>
    </Container>
    <Editor :gateway="gateway"/>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({ name: 'Stream' })
export default class Stream extends Vue {
  @Prop() gateway!: any;
}

</script>
