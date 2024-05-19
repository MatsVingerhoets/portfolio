import Button from "src/components/Button"
import { ButtonTypesEnum } from "src/components/Button/types"
import { Routes } from "./types"

export const routes: Routes[] = [
  {
    id: "home",
    to: "/",
    title: "Home"
  },
  {
    id: "about",
    to: "About",
    title: "About"
  },
  {
    id: "portfolio",
    to: "Portfolio",
    title: "Portfolio"
  },
  {
    id: "contact",
    to: "Contact",
    title: "Contact",
    component: (
      <Button className="py-2 px-4" type={ButtonTypesEnum.OUTLINED}>
        Contact
      </Button>
    )
  }
]
