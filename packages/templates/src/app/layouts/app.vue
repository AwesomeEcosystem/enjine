<template>
  <App>
    <Layout>
      <Nav slot="nav">
        <!-- <Settings slot="right"/> -->
      </Nav>
      <Menu slot="menu">
        <div class="flex flex-wrap w-full m-2 p-2">
          <NuxtLink class="w-full rounded bg-gray-700 hover:bg-gray-600 m-2 p-2" to="/">Home</NuxtLink>
        </div>
      </Menu>
      <Main slot="main">

        <Nuxt/>

      </Main>
    </Layout>
  </App>
</template>

<script>
import '@enjine/themes/basic/index.css'
import { App, Layout, Main, Nav, Menu, Settings } from '@enjine/components'

export default {
  components: {
    App,
    Layout,
    Main,
    Nav,
    Menu,
    Settings
  }
}
</script>

<style lang="css" scoped>

</style>
