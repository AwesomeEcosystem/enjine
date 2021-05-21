import _Vue, { PluginFunction } from 'vue';
// import { Session } from '@enjine/session'

// Import vue components
import * as components from '@/components/index';

// install function executed by Vue.use()
const install: PluginFunction<any> = function installComponents(Vue: typeof _Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  // Vue.prototype.$session = (config: any) => {
  //   return new Session(config)
  // }
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/components/index';
