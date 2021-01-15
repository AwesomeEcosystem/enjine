import { Manager } from '@scale/database';

const manager = new Manager('.database')
const media = manager.open('media')

export async function upload(data: any) { // TODO Credentials Interface

}

export async function stream(data: any) { // TODO Credentials Interface

}
