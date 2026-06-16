import axios from "axios";
import { authStorage } from "./authHelpers";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    }
});


//Attach Access Token Manually becos not cookies, so not no automatically done
apiClient.interceptors.request.use(
    (config) => {
        const token = authStorage.getAccessToken();
        if(token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;
        const status = error.response? error.response.status : null;

        if(status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = authStorage.getRefreshToken();

                if(!refreshToken) {
                    throw new Error('no refresh token in storage.');
                }

                const response = await axios.post(`${BASE_URL}/auth/refresh`, {
                    refreshToken
                });

                const { accessToken: newAccess, refreshToken: newRefresh } = response.data;

                authStorage.setTokens(newAccess, newRefresh);

                originalRequest.headers.Authorization = `Bearer ${newAccess}`;

                return apiClient(originalRequest)
            } catch (refreshError) {
                console.error('Session expired. Hard clearing data...');
                authStorage.clearTokens();
                //window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        } 

        return Promise.reject(error);
    }
);

export default apiClient;