import { createRoute, Outlet, redirect } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { authStorage } from "../../services/api/authHelpers";
import { Dashboard } from "../../pages/ProtectedPages/DashboardPage/Dashboard";


export const authLayoutRoot = createRoute({
    getParentRoute: () => rootRoute,
    id: 'authenticated',
    beforeLoad: async () => {
        if(!authStorage.getAccessToken()){
            throw redirect({ to: '/login' })
        }
    },
    component: () => <Outlet />,
})

export const dashboardRoute = createRoute({
    getParentRoute: () => authLayoutRoot,
    path: '/dashboard',
    component: Dashboard
})

//To Do: Add more Protected Routes Later when components and pages are added

export const protectedRoutes = authLayoutRoot.addChildren([
    dashboardRoute,
])