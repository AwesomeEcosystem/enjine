import { Model } from '@scale/database';

// TODO Transform Group into Identity

export class Document extends Model {
  author: string;

  constructor(kind: string, author: string) {
    super(kind)
    
    this.author = author;
  }
}
