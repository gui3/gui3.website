import logger from '../../utils/logger'

import error from './error'
// import locales from './locales'
import personalRouter from './personal/index'

const { Router } = require('express')
const apiRouter = Router()

// const autoRouter = require('./modules/autoRouter')

// const root = 'home' // set here the page to launch at address '/'

apiRouter.use(function timeLog (req, res, next) {
  logger.verbose('API-' + Date.now() + '-Request:' + req.url + '-Method:' + req.method)
  next()
})

apiRouter.get('/', (req, res) => {
  res.status(200)
    .json({
      description: 'access from here to all shared data of my website'
    })
})
apiRouter.use('/error', error)
// apiRouter.get('/locales', locales)
apiRouter.use('/personal', personalRouter)

// subdomains ===================================================
/*
const usersRoutes = require('./users')
router.use('/users', usersRoutes)
*/

logger.info('API ready')

export default apiRouter
