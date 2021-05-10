import { Data } from '@enjine/database';

// TODO Transform Group into Identity

export class Document extends Data {
  author: string;
  data: any;

  constructor(kind: string, author: string, data: any) {
    super(kind)

    this.author = author;
    this.data = data;
  }
}
