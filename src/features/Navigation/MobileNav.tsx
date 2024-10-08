import { Icon } from "@iconify/react/dist/iconify.js"
import { useClickAway } from "react-use"
import { useRef } from "react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Squash as Hamburger } from "hamburger-react"
import { routes } from "./config"

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setOpen(false))

  return (
    <div ref={ref} className="lg:hidden ">
      <Hamburger color="#93D4B1" toggled={isOpen} size={42} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-0 p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
          >
            <div className="flex justify-end w-full">
              <Icon
                role="button"
                onClick={() => setOpen(false)}
                className="mt-5 mb-3 text-3xl text-white text-end"
                icon="icomoon-free:cross"
              />
            </div>
            <ul className="grid gap-2">
              {routes.map(({ title, to }, idx) => {
                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10
                    }}
                    key={title}
                    className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                  >
                    <a
                      onClick={() => setOpen(prev => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950 text-white"
                      }
                      href={to}
                    >
                      <span className="flex gap-1 text-lg">{title}</span>
                    </a>
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav
