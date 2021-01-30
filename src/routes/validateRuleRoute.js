import express from 'express';
import { validateRule } from '../controllers/validateRule';
import {
	validateUserInput,
	ruleValidation,
} from '../middlewares/validateUserInput';

const router = express.Router();

router
	.route('/validate-rule')
	.post(validateUserInput,  ruleValidation, validateRule);

export default router;
