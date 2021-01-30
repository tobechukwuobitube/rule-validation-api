import express from 'express';
import { validateRule } from '../controllers/validateRule.js';
import {
	validateUserInput,
	ruleValidation,
} from '../middlewares/validateUserInput.js';

const router = express.Router();

router
	.route('/validate-rule')
	.post(validateUserInput,  ruleValidation, validateRule);

export default router;
