<template>
  <App>
    <Layout>
      <Nav slot="nav">
        <div slot="left">
          Left Nav
        </div>
        <div slot="middle">
          Middle Nav
        </div>
        <div slot="right">
          Right Nav
          <Settings/>
        </div>
      </Nav>
      <Main slot="main">
        <Container>
          Container
          <Card>
            Card
          </Card>
        </Container>
      </Main>
      <Menu slot="menu">Menu</Menu>
    </Layout>
  </App>
</template>

<script lang="ts">
import Vue from 'vue';
import { App, Layout, Main, Nav, Menu, Container, Card, Settings } from '@/entry.esm';

// import '@enjine/themes/basic/index.css'

export default Vue.extend({
  name: 'ServeDev',
  components: {
   App,
   Layout,
   Main,
   Nav,
   Menu,
   Container,
   Card,
   Settings
  }
});
</script>
