import Logo from "src/assets/Mats_Logo_White.svg?react"
import useScreenDetector from "src/hooks/useScreenDetector"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Navigation = () => {
  const { isMobile } = useScreenDetector()
  return (
    <div className="flex justify-between items-center mb-8 md:mb-10">
      <Logo className="w-20 md:w-24" />
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  )
}

export default Navigation
