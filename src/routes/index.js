import express from 'express'
import baseRoute from './baseRoute.js'
import validateRuleRoute from './validateRuleRoute.js'

const app = express()

app.use('/', baseRoute)
app.use('/', validateRuleRoute)

export default app