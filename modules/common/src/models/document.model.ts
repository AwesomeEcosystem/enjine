import { Model } from '@enjine/database';

// TODO Transform Group into Identity

export class Document extends Model {
  author: string;
  data: any;

  constructor(kind: string, author: string, data: any) {
    super(kind)

    this.author = author;
    this.data = data;
  }
}