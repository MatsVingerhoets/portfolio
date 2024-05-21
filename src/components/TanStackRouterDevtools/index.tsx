import React from "react"
import { Suspense } from "react"

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null
  : React.lazy(() =>
      import("@tanstack/router-devtools").then(res => ({
        default: res.TanStackRouterDevtools
      }))
    )

export default () => {
  return (
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  )
}
