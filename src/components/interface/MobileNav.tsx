import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { clsx } from "clsx";
import { MdClose } from "react-icons/md";
import navlinks from "../../constants/navlinks";
import Logo from "./Logo";
import LetsTalkButton from "./LetsTalkButton";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

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
            {navlinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-base hover:text-greencell duration-200 transition-all"
              >
                {link.title}
              </a>
            ))}
          </div>
          <LetsTalkButton>Let's talk</LetsTalkButton>
          <div className="flex items-center gap-4 xs:text-2xl lg:text-3xl text-greencell">
            <a
              aria-label="Link to Radek's Facebook"
              href="https://www.facebook.com/profile.php?id=100013716438314"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              <FaFacebookSquare />
            </a>
            <a
              aria-label="Link to Radek's Instagram"
              href="https://www.instagram.com/radekbartczakofficial/"
              target="_blank"
              className="hover:text-white transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
