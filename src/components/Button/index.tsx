import { PropsWithChildren } from "react"
import { Props, ButtonTypesEnum } from "./types"

const Button = ({ children, onClick, type }: PropsWithChildren<Props>) => {
  const buttonTypeClass = (() => {
    switch (type) {
      case ButtonTypesEnum.OUTLINED:
        return "bg-transparent text-foreground-primary border border-accent-default"
      case ButtonTypesEnum.DEFAULT:
        return "bg-accent-default text-background-primary shadow-accent-3xl"
      default:
        return "bg-accent-default text-background-primary shadow-accent-3xl"
    }
  })()
  return (
    <button
      className={`${buttonTypeClass} font-semibold py-2 px-4 rounded w-fit`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
