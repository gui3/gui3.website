import logger from '../../utils/logger'

import error from './error'
//import locales from './locales'

const { Router } = require('express')
const apiRouter = Router()

// const autoRouter = require('./modules/autoRouter')

// const root = 'home' // set here the page to launch at address '/'

apiRouter.use(function timeLog (req, res, next) {
  logger.verbose('API-' + Date.now() + '-Request:' + req.url + '-Method:' + req.method)
  next()
})

apiRouter.get('/error', error)
//apiRouter.get('/locales', locales)

// subdomains ===================================================
/*
const usersRoutes = require('./users')
router.use('/users', usersRoutes)
*/

logger.info('API ready')

export default apiRouter
