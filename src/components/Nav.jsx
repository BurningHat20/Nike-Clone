import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { arrowRight } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-lg:hidden flex gap-10">
          <button className="flex justify-center items-center gap-2 px-7 py-3 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
            Sign In
            <img
              src={arrowRight}
              alt="arrow right icon"
              className="ml-2 rounded-full w-5 h-5 "
            />
          </button>
        </div>
        <div className="hidden max-lg:block ">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
