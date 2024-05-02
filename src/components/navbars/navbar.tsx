
import { useLocation } from "react-router-dom"
import useScrollNavbar from "../../hooks/useScrollbar";
import { motion } from "../../utils/animation";
import { DesktopNavbar } from "./desktopNavbar";
import { MobileNavbar } from "./mobileNavbar";


const Navbar = () => {

  const { pathname } = useLocation();
  const scrolled = useScrollNavbar();

  return (
      <motion.div className={`
          fixed
          top-0
          z-[50]
          w-full
          shadow-lg
          bg-white
          flex
          items-center
          justify-between
          h-auto
          px-5
          py-3`}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1 , y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}>

        {/* Logo Section */}
        <div className="
             w-[50%]
             lg:w-[15%]
             flex
             items-center
            ">
          <img
            src="https://www.devronins.com/images/DevRonins.png"
            className="object-contain w-[100%]"
          />
        </div>

        {/* Navigation section  for Desktop*/}
        <DesktopNavbar/>

        {/* Navigation section for mobile */}
        <MobileNavbar/>

      </motion.div>
  )
}

export { Navbar }
