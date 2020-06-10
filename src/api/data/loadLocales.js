import fs from 'fs'
import logger from '../../utils/logger'

import loadJson from './loadJson'

const localesDir = '../../../locales'

export default function () {
  fs.readdir(localesDir)
    .then(filenames => {
      logger.info(filenames)
      filenames.map(fn => loadJson(fn))
      return Promise.all(filenames)
    })
    .then(datum => {
      logger.info(datum)
    })
    .catch(err => logger.error(err))
}
