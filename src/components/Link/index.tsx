import { PropsWithChildren } from "react"
import { Link as TanstackLink } from "@tanstack/react-router"

const Link = ({
  children,
  to,
  className
}: PropsWithChildren<{
  to: string
  className?: string
}>) => {
  return (
    <TanstackLink className={className} to={to}>
      {children}
    </TanstackLink>
  )
}

export default Link
