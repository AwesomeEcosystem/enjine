import { Document } from '@scale/common';

// TODO Transform Message into extended Document

export class Message extends Document {
  receiver: string;
  data: string;

  constructor(meta: any, data: string) { // TODO Meta Interface
    super('message', meta.author)
    
    this.receiver = meta.receiver;
    this.data = data;
  }
}
