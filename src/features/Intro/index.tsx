import Button from "src/components/Button"
import Image from "src/assets/charizard.png"
import { ButtonTypesEnum } from "src/components/Button/types"

const Intro = () => {
  return (
    <div className="flex align-middle justify-between">
      <div className="flex flex-col justify-between min-h-full max-w-4xl">
        <h1 className="font-bold text-foreground-primary mt-0">
          Hello, I am Mats Vingerhoets!
        </h1>
        <p className="text-foreground-primary">
          I’m a full stack developer with over 5 years of experience in the
          field. My passion for coding grows everyday and I’m always on the look
          for new challenges!
        </p>
        <Button type={ButtonTypesEnum.DEFAULT}>Let's talk!</Button>
      </div>
      <img className="w-52 rounded-full shadow-accent-3xl" src={Image}></img>
    </div>
  )
}

export default Intro
