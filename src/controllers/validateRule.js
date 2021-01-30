export const validateRule = (request, response) => {
	try {
		const { rule, data } = request.body;

		if (data.hasOwnProperty(`${rule.field}`) === false) {
			return response.status(400).json({
				message: `field ${rule.field} is missing from data.`,
				status: 'error',
				data: null,
			});
		}

		// rule.condition == 'eq'
		if (rule.condition === 'eq' && rule.condition_value === data[rule.field]) {
			return response.status(200).json({
				message: `field ${rule.field} successfully validated.`,
				status: 'success',
				data: {
					validation: {
						error: false,
						field: rule.field,
						field_value: data[rule.field],
						condition: rule.condition,
						condition_value: rule.condition_value,
					},
				},
			});
		} else if (
			// rule.condition == 'neq'
			rule.condition === 'neq' &&
			rule.condition_value !== data[rule.field]
		) {
			return response.status(200).json({
				message: `field ${rule.field} successfully validated.`,
				status: 'success',
				data: {
					validation: {
						error: false,
						field: rule.field,
						field_value: data[rule.field],
						condition: rule.condition,
						condition_value: rule.condition_value,
					},
				},
			});
		} else if (
			// rule.condition == 'gt'
			rule.condition === 'gt' &&
			rule.condition_value > data[rule.field]
		) {
			return response.status(200).json({
				message: `field ${rule.field} successfully validated.`,
				status: 'success',
				data: {
					validation: {
						error: false,
						field: rule.field,
						field_value: data[rule.field],
						condition: rule.condition,
						condition_value: rule.condition_value,
					},
				},
			});
		} else if (
			// rule.condition == 'gte'
			rule.condition === 'gte' &&
			rule.condition_value <= data[rule.field]
		) {
			return response.status(200).json({
				message: `field ${rule.field} successfully validated.`,
				status: 'success',
				data: {
					validation: {
						error: false,
						field: rule.field,
						field_value: data[rule.field],
						condition: rule.condition,
						condition_value: rule.condition_value,
					},
				},
			});
		} else if (
			// rule.condition == 'contains'
			rule.condition === 'contains' &&
			rule.condition_value === data[rule.field]
		) {
			return response.status(200).json({
				message: `field ${rule.field} successfully validated.`,
				status: 'success',
				data: {
					validation: {
						error: false,
						field: rule.field,
						field_value: data[rule.field],
						condition: rule.condition,
						condition_value: rule.condition_value,
					},
				},
			});
		} else {
			// if rule evaluation fails
			return response.status(400).json({
				message: `field ${rule.field} failed validation.`,
				status: 'error',
				data: {
					validation: {
						error: true,
						field: rule.field,
						field_value: data[rule.field],
						condition: rule.condition,
						condition_value: rule.condition_value,
					},
				},
			});
		}
	} catch (error) {
		return response
			.status(500)
			.json({ message: error.message, status: 'error', data: null });
	}
};
