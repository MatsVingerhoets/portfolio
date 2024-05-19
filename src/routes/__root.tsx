import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import Navigation from "src/features/Navigation"

export const Route = createRootRoute({
  component: () => (
    <div className="px-7">
      <Navigation />
      <Outlet />
      {!import.meta.env.PROD && <TanStackRouterDevtools />}
    </div>
  )
})
