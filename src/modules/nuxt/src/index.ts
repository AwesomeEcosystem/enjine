import { Module } from '@nuxt/types'

interface Options {
  a: boolean
  b: number
  c: string
}

const mod: Module<Options> = function (moduleOptions) {
  // Use this, this.options, this.nuxt
  // Use moduleOptions
}

export default mod

// REQUIRED if publishing the module as npm package
export const meta = require('./package.json')

export * from './config'