import express from 'express'
import baseRoute from './baseRoute'
import validateRuleRoute from './validateRuleRoute'

const app = express()

app.use('/', baseRoute)
app.use('/', validateRuleRoute)

export default app