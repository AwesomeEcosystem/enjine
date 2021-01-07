import * as fs from 'fs';

export function mkdir(path) {
  let string = './';
  let dirs: string[] = path.split('/').map((item: string) => item.trim()); // TODO secure enough? (ranomdly switch Dir Names without index)
  for (let dir of dirs) {
    if (!fs.existsSync(string + dir)) {
      fs.mkdirSync(string + dir)
    }
    string = string + dir + '/'
  }
  return string
}
