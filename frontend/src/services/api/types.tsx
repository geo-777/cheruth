
export interface RegisterType {
    username: string,
    email: string,
    password: string
}

export interface LoginType {
    email: string,
    password: string
}

export interface AuthResponseType {
    accessToken: string,
    refreshToken: string 
}

export interface MeResponseType {
    username: string,
    email: string,
    createdAt: string
}