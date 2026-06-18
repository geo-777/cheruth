import apiClient from "./apiClient";
import { authStorage } from "./authHelpers";
import type { AuthResponseType, LoginType, RegisterType } from "./types";


export const authServices = {
    register: async(payload: RegisterType): Promise<void> => {
        await apiClient.post('/auth/register', payload);
    },
    login: async(payload: LoginType): Promise<AuthResponseType> => {
        const response = await apiClient.post<AuthResponseType>('/auth/login', payload);
        const { accessToken, refreshToken } = response.data;

        authStorage.setTokens(accessToken, refreshToken);
        return response.data;
    },
    logout: () : void => {
        authStorage.clearTokens();
    }
}