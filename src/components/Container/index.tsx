import { PropsWithChildren } from "react"

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto pt-12">{children}</div>
}

export default Container
