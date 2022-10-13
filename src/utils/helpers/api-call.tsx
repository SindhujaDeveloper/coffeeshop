import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { config } from '../../config';

export const apiCall = async (apiConfig: any) => {
	try {
		let url: string;
		if (apiConfig.type === 'public') {
			url = `${config.apiBaseURL}${apiConfig.type}${apiConfig.apiPath}`;
		}
		else {
			url = `${config.apiBaseURL}${apiConfig.apiPath}`
		}
		const axiosRequestConfig: AxiosRequestConfig = {
			url,
			method: apiConfig.method,
			data: apiConfig.data,
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
			},
			params: apiConfig.params,
		};

		return await axios(axiosRequestConfig)
			.then((res: AxiosResponse) => ({ ...res }))
			.catch((error: AxiosError) => { throw new Error(error.message); });
	} catch (error) {
		console.info('error happened on axios!!', error);
		return error;
	}
};
