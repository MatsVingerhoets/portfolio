import Button from "src/components/Button"
import { ButtonTypesEnum } from "src/components/Button/types"

const Intro = () => {
  return (
    <div className="p-5">
      <h1 className="text-foreground-primary mb-9 text-3xl">
        Hello, I am Mats Vingerhoets!
      </h1>
      <p className="text-foreground-primary mb-7">
        I’m a full stack developer with over 5 years of experience in the field.
        My passion for coding grows everyday and I’m always on the look for new
        challenges!
      </p>
      <Button type={ButtonTypesEnum.DEFAULT}>Let's talk!</Button>
    </div>
  )
}

export default Intro
