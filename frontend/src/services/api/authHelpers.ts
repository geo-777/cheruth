
export const ACCESS_TOKEN = 'cheruth_access_token';
export const REFRESH_TOKEN = 'cheruth_refresh_token';

export const authStorage= {
    getAccessToken: () : string | null => localStorage.getItem(ACCESS_TOKEN),
    getRefreshToken: () : string | null => localStorage.getItem(REFRESH_TOKEN),

    setTokens: (access: string, refresh: string): void => {
        localStorage.setItem(ACCESS_TOKEN, access);
        localStorage.setItem(REFRESH_TOKEN, refresh);
    },

    clearTokens: (): void => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
    }
}