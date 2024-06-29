import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/portfolio")({
  component: () => <div>Hello /portfolio!</div>
})

