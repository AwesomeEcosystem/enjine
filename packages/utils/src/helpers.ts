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
