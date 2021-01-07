import * as uniqid from 'uniqid';

export class Model {
  _id: string;
  created: Date;
  // TODO by Prop (Session Based - Client = User )
  constructor(prefix: string) {
    this._id = (prefix) ? prefix + '=' + uniqid.process() : uniqid.process();
    this.created = new Date();
  }
}
