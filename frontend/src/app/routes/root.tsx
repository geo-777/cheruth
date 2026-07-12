import { createRootRoute, Outlet } from "@tanstack/react-router";


export const rootRoute = createRootRoute({
    component: () => (
        <div className="app-container">
            <Outlet />
        </div>
    )
})