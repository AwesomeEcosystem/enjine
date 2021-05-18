import { Component, Prop, Vue } from 'vue-property-decorator';
import { Connection } from '@enjine/session';

class Feed extends Array {
  post(obj: any) {
    this.push(obj)
  };

  update() {

  };

  remove() {

  };

}

@Component({ name: 'Connection' })
export default class Base extends Connection. Vue {
  @Prop() ticket?: any;
  @Prop() config?: any;
  @Prop() gateway?: any;
  @Prop() controller?: any;

  feed: Feed[] = [];

  mounted() {
    this.init(this.config)

    this.feed = this.all();

    if (this.gateway) {
      this.gateway.on('post', (obj: any[]) => this.feed.post(obj));
      this.gateway.on('update', (obj: any[]) => this.feed.update(obj));
      this.gateway.on('remove', (id: string) => this.feed.remove(id));
    }
  }

}
