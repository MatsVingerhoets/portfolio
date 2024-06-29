import { createLazyFileRoute } from "@tanstack/react-router"
import Button from "src/components/Button"
import Image from "src/assets/charizard.png"

export const Route = createLazyFileRoute("/")({
  component: Index
})

function Index() {
  return (
    <div className="p-2">
      <div className='flex align-middle'>
        <div className="flex flex-col justify-between min-h-full">
          <h1 className="text-foreground-primary">
            Hello, I am Mats Vingerhoets!
          </h1>
          <p className="text-foreground-primary">
            I’m a full stack developer with over 5 years of experience in the field.
            My passion for coding grows everyday and I’m always on the look for new
            challenges!
          </p>
          <Button>Let's talk!</Button>
        </div>
        <img className="w-52 rounded-full shadow-3xl" src={Image}></img>
      </div>
    </div>
  )
}
