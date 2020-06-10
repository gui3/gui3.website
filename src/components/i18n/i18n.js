import { lang } from './langStore.js'
import { locales } from './locales.js'

function translate (key) {
  return $lang + ':' + key
}

let langs = locales

export {
  translate,
  langs
}
