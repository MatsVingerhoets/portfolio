import { PropsWithChildren } from "react"
import { Link as TanstackLink } from "@tanstack/react-router"

const NavLink = ({
  children,
  to,
  underline,
  className
}: PropsWithChildren<{
  to: string
  underline?: boolean
  className?: string
}>) => {
  return (
    <TanstackLink
      className={`py-3 px-7 flex items-center ${underline && "[&.active]:border-b-2 border-accent-default"} ${className}`}
      to={to}
    >
      {children}
    </TanstackLink>
  )
}

export default NavLink
