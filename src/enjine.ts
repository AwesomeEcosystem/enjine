import { Application } from '@enjine/common';

export default new Application({
  theme: '@enjine/components/themes/basic', // css file or tailwind.config.js
  components: [
    '@enjine/components',
    '@ecosis/authic'
  ]
})
