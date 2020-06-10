const fs = require('fs').promises
import logger from '../../utils/logger'

function loadJson (path) {
  logger.debug('>loading json')
  return fs.readFile(path)
    .then(data => {
      logger.debug('>json loaded')
      return JSON.parse(data)
    })
    .catch(err => logger.error(err))
}

export default loadJson
