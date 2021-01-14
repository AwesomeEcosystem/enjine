export class Endpoint {
  name: string;
  fn: any;
  constructor(name: string, fn: any) {
    this.name = name;
    this.fn = fn;
    console.log(`Endpoint '${this.name}' initialized`);
  }
}
