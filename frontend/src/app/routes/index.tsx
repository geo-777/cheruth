import { createRouter } from "@tanstack/react-router";
import { protectedRoutes } from "./ProtectedRoutes";
import { publicRoutes } from "./PublicRoutes";
import { rootRoute } from "./root";


const routeTree = rootRoute.addChildren([
    ...publicRoutes,
    protectedRoutes,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}