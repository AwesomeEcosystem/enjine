import { Document } from '@scale/common';

// TODO Transform Message into extended Document

export class Post extends Document {
  title: string;
  content: string;

  constructor(meta: any, content: string) { // TODO Meta Interface
    super('post', meta.author)

    this.title = meta.title;
    this.content = content;
  }
}
