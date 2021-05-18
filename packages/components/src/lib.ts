import Vue from 'vue'

import { Session } from '@enjine/session'

import App from './components/App.vue';
import Card from './components/Card.vue';
import Container from './components/Container.vue';
import Layout from './components/Layout.vue';
import Main from './components/Main.vue';
import Menu from './components/Menu.vue';
import Nav from './components/Nav.vue';
import Settings from './components/Settings.vue';
import Connection from './components/Connection.vue';
import './assets/tailwind.css'

declare module 'vue/types/vue' {
  interface Vue {
    $session(config?: any): void
  }
}

const components: any[] = [
  App,
  Card,
  Container,
  Layout,
  Main,
  Menu,
  Nav,
  Settings,
  Connection
]

export function install(Vue: Vue, args: any = {}) {

  if (install.installed) {
    return;
  }

  install.installed = true;

  const lib: any = (args.components && Array.isArray(args.components)) || components;
  lib.forEach((component: any) => {
    Vue.use(component, args);
  });

  // Vue 2 Implementation
  Vue.prototype.$session = new Session()
}

export {
  App,
  Card,
  Container,
  Layout,
  Main,
  Menu,
  Nav,
  Settings,
  Connection
}
