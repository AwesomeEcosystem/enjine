export interface User {
  _id: string;
  username: string;
  emails: [string];
  provider: string;
  reference: string;
  displayName: string;
}
