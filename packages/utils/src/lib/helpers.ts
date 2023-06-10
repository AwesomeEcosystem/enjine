// declare global {
//     interface Array<any> {
//       post(o: any);
//       update(o: any);
//       remove(o: any);
//     }
// }

export function extendArrayPrototypes() {
  // if (!Array.prototype.post) {
  //   Array.prototype.post = (obj: any) => {
  //     this.push(obj)
  //   }
  // }
  //
  // if (!Array.prototype.update) {
  //   Array.prototype.update = (data: any) => {
  //     const arr = this.map((obj: any) => (obj._id === data._id) ? obj = data : obj);
  //     this = arr;
  //   }
  // }
  //
  // if (!Array.prototype.remove) {
  //   Array.prototype.remove = (obj: any) => {
  //     const filtered: any = this.filter((d: any) => d != obj);
  //     this = filtered;
  //   }
  // }
}

export function serialize(data: any): any {
  return JSON.stringify(data)
}

export function deserialize(data: any): any {
  return JSON.parse(data)
}

export function generateKey(): string {
  var timestamp = Date.now();
  var rand = Math.random();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (timestamp + rand + Math.random() * 16) % 16 | 0;
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
