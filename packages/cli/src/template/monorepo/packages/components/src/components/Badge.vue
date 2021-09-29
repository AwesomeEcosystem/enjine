<template>
  <div class="flex flex-col justify-around items-center">
    <img
      class="w-24 rounded-full"
      src="https://media-exp1.licdn.com/dms/image/C4D0BAQGWmKb5bGho8Q/company-logo_200_200/0/1630482349668?e=1639612800&v=beta&t=c_tMpCx47EqWxWb8wQEmNDS0uvqaeZ0nYd3Ks-P8sEo"
      alt=""/>
      <Card>
        Links...
      </Card>
    <h1 class="text-6xl p-2"><%= name %></h1>
    <p><%= description %></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'Badge' })
export default class Badge extends Vue {}
</script>

<style scoped>

</style>
