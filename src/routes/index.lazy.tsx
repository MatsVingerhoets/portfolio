import { createLazyFileRoute } from "@tanstack/react-router"
import Button from "src/components/Button"

export const Route = createLazyFileRoute("/")({
  component: Index
})

function Index() {
  return (
    <div className="p-2">
      <h1 className="text-foreground-primary mb-9">
        Hello, I am Mats Vingerhoets!
      </h1>
      <p className="text-foreground-primary mb-7">
        I’m a full stack developer with over 5 years of experience in the field.
        My passion for coding grows everyday and I’m always on the look for new
        challenges!
      </p>
      <Button>Let's talk!</Button>
    </div>
  )
}
