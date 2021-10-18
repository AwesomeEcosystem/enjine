<template>
  <section class="flex flex-col justify-around items-center container mx-auto">
    <div class="flex flex-col justify-start items-center py-32">
      <img
        class="w-32 rounded-full m-8"
        src="~/assets/logos/logo.png"/>
      <div class="flex flex-col justify-around items-center text-center w-full">
        <h1><%= name %></h1>
        <p><%= description %></p>
      </div>
    </div>
    <!-- <ColorModePicker/> -->
  </section>
</template>


<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
