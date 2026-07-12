import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { authStorage } from "../../services/api/authHelpers";
import LandingPage from "../../pages/landingPage/LandingPage";
import { LoginPage } from "../../pages/AuthPages/LoginPage";
import { RegisterPage } from "../../pages/AuthPages/RegisterPage";


export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    beforeLoad: async () => {
        if (authStorage.getAccessToken()){
            throw redirect({ to: '/dashboard' })
        }
    },
    component: LandingPage,
})

export const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage,
})

export const registerRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/register',
    component: RegisterPage,
})


export const publicRoutes = [indexRoute, loginRoute, registerRoute]