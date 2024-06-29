import { PropsWithChildren } from "react"
import { Link as TanstackLink } from "@tanstack/react-router"

const Link = ({ children, to }: PropsWithChildren<{ to: string }>) => {
  return (
    <TanstackLink
      className="py-3 px-7 [&.active]:border-b-2 border-accent-default"
      to={to}
    >
      {children}
    </TanstackLink>
  )
}

export default Link
