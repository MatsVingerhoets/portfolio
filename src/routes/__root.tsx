import { createRootRoute, Outlet } from "@tanstack/react-router"
import Navigation from "src/features/Navigation"
import TanStackRouterDevtools from "src/components/TanStackRouterDevtools"

export const Route = createRootRoute({
  component: () => (
    <div className="px-7">
      <Navigation />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  )
})
