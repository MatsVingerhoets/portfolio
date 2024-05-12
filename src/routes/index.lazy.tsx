import { createLazyFileRoute } from "@tanstack/react-router"
import Button from "src/components/Button"
import Image from "src/assets/charizard.png"

export const Route = createLazyFileRoute("/")({
  component: Index
})

function Index() {
  return (
    <div className="p-7 pt-0">
      <Intro />
      <RecentProjects />
    </div>
  )
}
