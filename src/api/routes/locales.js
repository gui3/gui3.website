import loadLocales from '../data/loadLocales'

let localesData

loadLocales()
  .then(locales => {
    localesData = locales
  })

export default function error (req, res) {
  res.json(localesData)
}
