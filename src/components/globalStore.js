import { writable } from 'svelte/store'

let pageHeight = writable(500)
let headerHeight = writable(100)
let footerHeight = writable(100)

let theme = writable('white')

export {
  headerHeight,
  footerHeight,
  pageHeight,
  theme
}
