import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { clsx } from "clsx";
import { MdClose } from "react-icons/md";
import navlinks from "../../constants/navlinks";
import Logo from "./Logo";
import LetsTalkButton from "./LetsTalkButton";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(true);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 p-4 z-40 w-full bg-black">
        <button onClick={openNavbar} className="">
          <GiHamburgerMenu className="text-greencell text-3xl hover:text-white transition-all duration-300" />
        </button>
      </header>
      <nav
        className={clsx(
          "flex fixed z-50 left-0 top-0 bg-black p-4 flex-col gap-10 w-1/2 backdrop-blur-lg text-white transition-all duration-500 lg:hidden",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen }
        )}
      >
        <button onClick={closeNavbar}>
          <MdClose className="text-3xl text-greencell hover:text-white transition-all duration-300" />
        </button>
        <div className="flex flex-col gap-8 items-center">
          <Logo href="#intro" className="w-[160px]" />
          <div className="flex flex-col gap-6 items-center w-full">
            {navlinks.map((link) => (
              <a
                href={link.href}
                className="text-base hover:text-greencell duration-200 transition-all"
              >
                {link.title}
              </a>
            ))}
          </div>
          <LetsTalkButton>Let's talk</LetsTalkButton>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
