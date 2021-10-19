<template>
  <div class="">
    <Nav class="bg-gray-800" :pages="pages" :options="options"/>
    <section>
      <nuxt/>
    </section>
  </div>
</template>

<script>
import Nav from '~/components/Nav'

export default {
  data() {
    return {
      pages: [
        // 'Home'
      ],
      options: [
        // 'Profile',
        // 'Settings'
      ]
    }
  },
  components: {
    Nav
  }
}
</script>

<style>

body {
  @apply bg-gray-700 text-white;
}

section {
  @apply container md:mx-auto px-4 py-8;
}

</style>
