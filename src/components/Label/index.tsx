import { Icon } from "@iconify/react"
import { PropsWithChildren } from "react"
import { Props } from "./types"

const Label = ({ icon, children }: PropsWithChildren<Props>) => {
  return (
    <div className="flex gap-2">
      <Icon
        className="text-accent-default"
        width="24px"
        height="24px"
        icon={icon}
      />
      {children}
    </div>
  )
}

export default Label
