import { createLazyFileRoute } from "@tanstack/react-router"
import ContactInfo from "src/features/ContactInfo"
import Intro from "src/features/Intro"
import RecentProjects from "src/features/RecentProjects"

export const Route = createLazyFileRoute("/")({
  component: Index
})

function Index() {
  return (
    <>
      <Intro />
      <RecentProjects />
      <ContactInfo />
    </>
  )
}
