import { IAuthResponse } from '@/types/AuthResponse';
import axios, { AxiosError, AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';

export const API_URL = 'https://test-back.cryptelligence.ai/';

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const auth = async (): Promise<AxiosResponse<IAuthResponse>> => {
	console.log('trying to auth');
	return instance.post<IAuthResponse>('api/v1/auth');
};

export const refresh = async (
	id: string,
	refreshToken: string
): Promise<AxiosResponse<IAuthResponse>> => {
	console.log('trying to refresh');
	return instance.post<IAuthResponse>('api/v1/auth/refresh', {
		id,
		refreshToken,
	});
};

instance.interceptors.response.use(
	(response: AxiosResponse) => response,

	async (error: AxiosError) => {
		const originalRequest = error.config;

		if (error?.response?.status === 401 && originalRequest) {
			try {
				const refreshToken = await SecureStore.getItemAsync('refreshToken');
				const userId = await SecureStore.getItemAsync('userId');

				if (refreshToken && userId) {
					const response = await refresh(userId, refreshToken);

					await SecureStore.setItemAsync(
						'refreshToken',
						response.data.refreshToken
					);
					await SecureStore.setItemAsync('userId', response.data.user.id);

					const bearerToken = `Bearer ${response.data.accessToken}`;

					instance.defaults.headers.common['Authorization'] = bearerToken;
					originalRequest.headers['Authorization'] = bearerToken;

					return instance.request(originalRequest);
				} else {
					const response = await auth();

					await SecureStore.setItemAsync(
						'refreshToken',
						response.data.refreshToken
					);
					await SecureStore.setItemAsync('userId', response.data.user.id);

					const bearerToken = `Bearer ${response.data.accessToken}`;

					instance.defaults.headers.common['Authorization'] = bearerToken;
					originalRequest.headers['Authorization'] = bearerToken;

					return instance.request(originalRequest);
				}
			} catch (error) {
				console.log(error);
				return Promise.reject(error);
			}
		}

		return Promise.reject(error);
	}
);

export default instance;
