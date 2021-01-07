import axios from 'axios';

export class Connection {
  instance: any;
  url: string;
  token: string;

  constructor(url: string) {

    this.instance = axios.create({
      baseURL: url,
      timeout: 1000,
      headers: {'Content-Type': 'application/json'}
    });

    this.url = url;

    if (localStorage) {
      localStorage.access_url = this.url

      if (localStorage && localStorage.access_token) {
        this.token = localStorage.access_token
      }
    }
  }

  login(credentials: any) { // TODO Credential Interface
    return new Promise((resolve: any, reject: any) => {

      this.instance.post('/login', credentials)
      .then((response: any) => {

        if (localStorage) {
          localStorage.access_token = response.data.access_token;
          this.token = localStorage.access_token;
        }

        resolve(response);
      })
      .catch((error: any) => {
        reject(error);
      });
    })
  }
}
