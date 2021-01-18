export class Endpoint {
  name: string;
  fn: any;

  constructor(name: string, fn: any) { // SocketIO Interface && FN Interface
    this.name = name;
    this.fn = fn;
  }

  initialize(socket: any) {

    socket.on(this.name, async (data: any, callback: any) => {
      await this.fn(socket, data, callback)
    })

    console.log(`Endpoint '${this.name}' initialized`);
  }
}
