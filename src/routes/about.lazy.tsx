import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
  component: About
})

function About() {
  console.log(import.meta.env.PROD)
  return <div className="p-2">Hello from About!</div>
}
