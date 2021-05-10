import uniqid from 'uniqid';

export class Data {
  _id: string;
  created: Date;
  // TODO Updated Prop
  constructor(prefix: string) {
    this._id = (prefix) ? prefix + '=' + uniqid.process() : uniqid.process();
    this.created = new Date();
  }
}
