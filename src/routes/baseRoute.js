import express from 'express'
import {base} from '../controllers/base'

const router = express.Router()

router.route('/').get(base)

export default router