

export class Instance {
  public name: string;
  public gateways: any; // TODO Type Gateways
  public io: any; // TODO io Type

  constructor(name: string, gateways: any) {
    this.name = name;
    this.gateways = gateways;
  }

  public init(io: any, server: any, config: any) {
    this.io = io;
    this.io.path(this.name);
    this.io.attach(server, config);

    for (const gateway of this.gateways) {
      gateway.init(this.io);
    };

    console.log(`Instance '${this.name}' initialized`);
  }

}
