import {personalData} from '../data/data.js'

export const base = (request, response) => {
	try {
		
		return response.status(200).json({
			message: "Personal data fetched successfully",
			status: "success",
			data: personalData
		})
	} catch (error) {
		
	}
}