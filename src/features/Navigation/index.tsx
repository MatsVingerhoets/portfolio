import Logo from "src/assets/Mats_Logo_White.svg?react"
import Button from "src/components/Button"
import { ButtonTypesEnum } from "src/components/Button/types"
import Link from "src/components/Link"

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo className="w-28" />
      <div className="text-foreground-primary flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact" underline={false}>
          <Button type={ButtonTypesEnum.OUTLINED}>Contact</Button>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
