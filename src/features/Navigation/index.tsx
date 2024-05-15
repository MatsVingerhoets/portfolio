import Logo from "src/assets/Mats_Logo_White.svg?react"
import Button from "src/components/Button"
import { ButtonTypesEnum } from "src/components/Button/types"
import NavLink from "src/components/NavLink"

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo className="w-28" />
      <div className="text-foreground-primary flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/contact" underline={false}>
          <Button type={ButtonTypesEnum.OUTLINED}>Contact</Button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navigation
