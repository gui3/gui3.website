import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import cookieSession from 'cookie-session'

import logger from './utils/logger'

import apiRouter from './api/routes/index'
import fatal500 from './utils/middlewares/fatal500'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'
logger.info('NODE_ENV: ' + NODE_ENV)

const app = express()

app.set('json spaces', 2)

app.set('trust proxy', 1)
app.use(cookieSession({
  name: 'session',
  keys: ['tHiSisAKeY', 'FoRCooKIeSeSSioN']
}))

app.use(compression({ threshold: 0 }))
app.use(sirv('static', { dev }))

if (dev) {
  app.use((req, res, next) => {
    logger.debug('>req.url: ' + req.url)
    next()
  })
}

app.use('/api', apiRouter) // bypass sapper for api calls

app.use(sapper.middleware({
  session: req => ({
    user: req.session && req.session.user
  })
}))

app.use(fatal500)

app.listen(PORT, err => {
  if (err) logger.error('error', err)
})
