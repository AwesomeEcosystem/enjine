import { Database } from './database';
import { Model } from './model';

// class DatabaseModel extends Model { // TODO too ugly - Declaration Dilemma
//   name: string;
//   path: string;
//   constructor(name: string, path: string) {
//     super('db-' + name)
//     this.name = name;
//     this.path = path;
//   }
// }

export class Manager extends Database {
  path: string;
  cryto: any; // TODO Option for Crypto-Path & Crypto-Data
  constructor(name: string) {
    super(name)
    this.path = name + '/'
  }

  create(name: string) {
    // const db = new DatabaseModel(name, this.path) TODO DB Entry in Manager
    return this.open(name)
  }

  open(name: string) {
    return new Manager(this.path + name)
  }
}

// TODO Archive System (Time-Period etc)
