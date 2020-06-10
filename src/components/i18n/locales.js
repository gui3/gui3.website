import { writable } from 'svelte/store'

let locales = writable()

setTimeout(
  _ => {
    locales.set([
      {
        name: 'fr',
        emoji: '🇫🇷'
      },
      {
        name: 'en',
        emoji: '🇬🇧'
      }
    ])
  },
  5000
)

export {
  locales
}
