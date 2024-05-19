import { PropsWithChildren } from "react"

const Container = ({ children }: PropsWithChildren) => {
  return <div className="container mx-auto py-12">{children}</div>
}

export default Container
