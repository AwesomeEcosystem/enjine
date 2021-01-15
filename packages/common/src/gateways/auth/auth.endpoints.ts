import { Manager } from '@scale/database';

const manager = new Manager('.database')
const users = manager.open('users')

export async function login(credentials: any) { // TODO Credentials Interface

}

export async function auth(credentials: any) { // TODO Credentials Interface

}
