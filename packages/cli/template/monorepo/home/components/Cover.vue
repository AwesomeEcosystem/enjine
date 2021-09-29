<template>
  <div class="flex flex-wrap justify-around items-center w-full bg-gray-800 md:relative">
    <img src="~/assets/imgs/Cover.png" class="w-4/5 rounded-b-xl">
    <div class="flex flex-wrap justify-around items-center md:absolute md:bottom-2 md:left-2 md:bottom-32 md:left-64">
      <img src="~/assets/logos/ecosis.png" class="w-12 md:w-16 rounded-full" alt="ecosis">
      <div class="flex flex-col p-2">
        <h1>ecosis</h1>
        <p>Distributed Economies</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h1 {
  @apply py-0 mb-0;
}

p {
  @apply pl-4
}
</style>
