import { PropsWithChildren } from "react"
import { Props } from "./types"

const Button = ({ children, onClick }: PropsWithChildren<Props>) => {
  return (
    <button
      className="bg-accent-default text-background-primary font-bold py-2 px-4 rounded shadow-3xl w-fit"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
