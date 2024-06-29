import Logo from "src/assets/Mats_Logo_White.svg?react"
import Link from "src/components/Link"

const Navigation = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo className="w-28" />
      <div className="text-foreground-primary flex">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navigation
