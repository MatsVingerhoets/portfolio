import { PropsWithChildren } from "react"
import { Link as TanstackLink } from "@tanstack/react-router"

const Link = ({
  children,
  to,
  underline
}: PropsWithChildren<{ to: string; underline?: boolean }>) => {
  return (
    <TanstackLink
      className={`py-3 px-7 flex items-center ${underline && "[&.active]:border-b-2 border-accent-default"}`}
      to={to}
    >
      {children}
    </TanstackLink>
  )
}

export default Link
