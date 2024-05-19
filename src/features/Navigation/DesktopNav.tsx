import NavLink from "src/components/NavLink"
import { routes } from "./config"

const DesktopNav = () => {
  return (
    <div className="text-foreground-primary flex">
      {routes.map(({ component, id, title, to }) => {
        return (
          <NavLink key={id} to={to}>
            {component ? component : title}
          </NavLink>
        )
      })}
    </div>
  )
}

export default DesktopNav
