import Joi from 'joi';


export const validateUserInput = (request, response, next) => {

		const userInputSchema = Joi.object().keys({
			rule: Joi.object().required().strict()
				.messages({
					"any.required": `rule is required`,
					"object.base": `rule should be an object`,
				}),
			data: Joi.any().required().messages({
				"any.required": `data is required`
			}),
		});

		// schema options
		const options = {
			abortEarly: false, // include all errors
			allowUnknown: true, // ignore unknown props
			stripUnknown: true, // remove unknown props
		};

		// validate request body against schema
		const { error, value } = userInputSchema.validate(request.body, options);

		if (error) {
			// on fail return comma separated errors
			next(response.status(400).json({
				message: `${ error.details.map((x) => x.message).join(', ') }.`,
				status: 'error',
				data: null,
			}));
			// next()
		} else {
			// on success replace request.body with validated value and trigger next middleware function
			request.body = value;
			next();
		}
};

export const ruleValidation = (request, response, next) => {

		const ruleSchema = Joi.object().keys({
			field: Joi.string().trim().required().messages({
				'any.required': `field is required`,
				'string.base': `field should be a string`,
			}),
			condition: Joi.string().trim()
				.valid('eq', 'neq', 'gt', 'gte', 'contains')
				.required()
				.messages({
					'any.required': `condition is required`,
					'string.base': `condition should be a string`,
				}),
			condition_value: Joi.number().integer().min(1).required().strict().messages({
				'any.required': 'condition_value is required',
				'number.base': 'condition_value should be a number'
			})
		});

		// schema options
		const options = {
			abortEarly: false, // include all errors
			allowUnknown: true, // ignore unknown props
			stripUnknown: true, // remove unknown props
		};

		// validate the rule component of request body against schema
		const { error, value } = ruleSchema.validate(request.body.rule, options);

		if (error) {
			// on fail return comma separated errors
			next(response.status(400).json({
				message: `${error.details.map((x) => x.message).join(', ')}.`,
				status: 'error',
				data: null,
			}));
			// next()
		} else {
			// on success replace request.body with validated value and trigger next middleware function
			request.body.rule = value;
			next();
		}
};
