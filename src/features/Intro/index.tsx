import Button from "src/components/Button"
import Image from "src/assets/charizard.png"
import { ButtonTypesEnum } from "src/components/Button/types"
import useScreenDetector from "src/hooks/useScreenDetector"
import { Icon } from "@iconify/react/dist/iconify.js"

const Intro = () => {
  const { isDesktop } = useScreenDetector()
  return (
    <div className="flex align-middle justify-between">
      <div className="flex flex-col min-h-48 max-w-4xl">
        <h1 className="font-bold text-foreground-primary mt-0">
          Hello, I am Mats Vingerhoets!
        </h1>
        <p className={`text-foreground-primary`}>
          I’m a full stack developer with over 5 years of experience in the
          field. My passion for coding grows everyday and I’m always on the look
          for new challenges!
        </p>
        <Button
          className="lg:mt-auto mt-6 px-14 lg:py-4 py-3 text-center w-full md:w-fit text-xl flex gap-2 items-center justify-center"
          type={ButtonTypesEnum.DEFAULT}
        >
          Let's talk!
          <Icon
            className="text-background-primary"
            icon="clarity:talk-bubbles-solid"
          />
        </Button>
      </div>
      {isDesktop && (
        <img className="w-52 rounded-full shadow-accent-3xl" src={Image}></img>
      )}
    </div>
  )
}

export default Intro
