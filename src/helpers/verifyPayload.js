export const verifyPayload = (request, response, buffer, encoding) => {
	try {
		JSON.parse(buffer);
	} catch (e) {
		response.status(400).json({
			message: 'Invalid JSON payload passed.',
			status: 'error',
			data: null,
		});
	}
};
