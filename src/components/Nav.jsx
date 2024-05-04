import { motion } from "framer-motion";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { arrowRight } from "../assets/icons";

const Nav = () => {
  return (
    <motion.header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <motion.a
          href="/"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </motion.a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <motion.li
              key={item.label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="max-lg:hidden flex gap-10">
          <motion.button
            className="flex justify-center items-center gap-2 px-7 py-3 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
            <motion.img
              src={arrowRight}
              alt="arrow right icon"
              className="ml-2 rounded-full w-5 h-5"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.button>
        </div>
        <motion.div
          className="hidden max-lg:block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Nav;
