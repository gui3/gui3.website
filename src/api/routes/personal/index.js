// import logger from '../../../utils/logger'

import statsResponse from './statsResponse'

const { Router } = require('express')
const personalRouter = Router()

personalRouter.get('/', (req, res) => {
  res.status(200)
    .json({
      stats:'get my personal stats on github, stackoverflow, codewars'
    })
})
personalRouter.get('/stats', statsResponse)

export default personalRouter
