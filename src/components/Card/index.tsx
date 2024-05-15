import Link from "src/components/Link"
import { Props } from "./types"

const Card = ({ project }: Props) => {
  const { description, src, title, to } = project
  return (
    <div className="flex flex-col flex-auto overflow-hidden shadow-default-3xl rounded basis-full">
      <div className="w-full h-60 overflow-hidden">
        <img className="object-fill" src={src}></img>
      </div>
      <div className="p-3 flex flex-col grow justify-between basis-1">
        <div>
          <h3 className="mb-2 font-medium text-foreground-primary text-xl">
            {title}
          </h3>
          <p className="text-foreground-primary text-base leading-4">
            {description}
          </p>
        </div>
        <Link
          className="w-fit mt-1 mb-2 text-accent-default border-b-2 border-accent-default"
          to={to}
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default Card
