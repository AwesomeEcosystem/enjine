<template>
  <section class="w-full bg-gray-800 text-white text-center">
    <div class="container mx-auto w-full p-4">
      <div class="w-full text-center">
        <h1>Network</h1>
      </div>

      <div class="py-4 my-8">
        <div class="w-full text-center">
          <h2>Partner</h2>
        </div>

        <div class="flex flex-wrap justify-center">

          <div class="w-full md:w-1/4 m-2 p-4 hover:bg-gray-700 rounded">
            <div class="flex flex-col justify-around items-center">
              <img src="~/assets/logos/enjine.png" class="w-32 rounded-full">
              <h2>enjine</h2>
            </div>
            <p>Progressive Fullstack Application Framework for interoperable Progressive Web, Native and Server Applications</p>
          </div>

        </div>
      </div>

      <div class="py-4 my-8">
        <div class="w-full text-center">
          <h2>Contributor</h2>
        </div>

        <div class="flex flex-wrap justify-center">

          <div class="w-full md:w-1/4 m-2 p-4 hover:bg-gray-700 rounded">
            <a href="http://equaliser.ecosis.io" target="_blank" class="flex flex-col justify-around items-center">
              <img src="https://i1.sndcdn.com/avatars-000062196488-oyqlou-t500x500.jpg" class="w-16 rounded-full">
              <h3>equaliser</h3>
              <p>Founder, Strategist, Fullstack Developer</p>
            </a>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h3 {
  @apply pt-2
}
</style>
