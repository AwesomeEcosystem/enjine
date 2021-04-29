<template>
  <App>
    <Layout :menu="true" :nav="true">
      <Menu slot="menu">Menu</Menu>

      <Nav slot="nav">
        <p slot="left">Nav</p>
        <input class="w-full bg-gray-600 rounded-md p-2" slot="middle" placeholder="Search">
        <Settings slot="right"/>
      </Nav>

      <Main slot="main" :wrap="true">
        <Container :wrap="true">
          <h1 class="w-full text-center">Container</h1>
          <Card><Session/></Card>
          <Card><Session gateway="data"/></Card>
          <Card><Session/></Card>
          <Card><Session/></Card>
          <Card><Session gateway="user"/></Card>
        </Container>
        <Card>Card</Card>
        <Card>Card</Card>
        <Container :wrap="false">
          <h1 class="w-full text-center">Container</h1>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
        </Container>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>

      </Main>

    </Layout>
  </App>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import App from './components/App.vue';
import Layout from './components/Layout.vue';
import Menu from './components/Menu.vue';
import Nav from './components/Nav.vue';
import Main from './components/Main.vue';
import Settings from './components/Settings.vue';
import Container from './components/Container.vue';
import Card from './components/Card.vue';
import Session from './components/Session.vue';

@Component({
  components: {
    App,
    Layout,
    Menu,
    Nav,
    Main,
    Settings,
    Container,
    Card,
    Session
  },
})
export default class Sandbox extends Vue {
  settings = false

  triggerSettings() {
    this.settings = !this.settings;
  }
}
</script>

<style>
</style>
