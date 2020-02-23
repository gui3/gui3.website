import sirv from 'sirv'
import express from 'express'
import compression from 'compression'
import * as sapper from '@sapper/server'
import cookieSession from 'cookie-session'

import fatal500 from './utils/middlewares/fatal500'

const { PORT, NODE_ENV } = process.env
const dev = NODE_ENV === 'development'

const app = express()

app.set('trust proxy', 1)
app.use(cookieSession({
  name: 'session',
  keys: ['tHiSisAKeY', 'FoRCooKIeSeSSioN']
}))

app.use(compression({ threshold: 0 }))
app.use(sirv('static', { dev }))

app.get('/api/error', (req, res, next) => {
  const error = new Error('this is a voluntary error')
  error.code = 'VOLUNTARY'
  next(error)
})

app.use(sapper.middleware({
  session: req => ({
    user: req.session && req.session.user
  })
}))

app.use(fatal500)

app.listen(PORT, err => {
  if (err) console.log('error', err)
})
