import { writable } from 'svelte/store'

let lang = writable('fr')

export {
  lang
}
