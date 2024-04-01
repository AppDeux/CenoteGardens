import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logoHeader from "@/assets/svgs/logo_header.svg";
import iconMenu from "@/assets/svgs/circum_menu-fries.svg";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollNumber(window.scrollY);
    });

    // si showNav es true, bloquear scroll vertical
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [scrollNumber, showMobileMenu]);

  return (
    <header
      className={`${scrollNumber < 10 ? "bg-transparent" : "bg-accent-700"}
      fixed top-0 z-20 w-full
      transition-colors delay-300 ease-linear`}
    >
      <div
        className="container m-auto
        py-3 pr-2 md:pr-0
        grid grid-cols-6
        items-center justify-items-center"
      >
        <div className="flex order-1">
          <Hamburger
            size={32}
            color="#fff"
            distance="lg"
            rounded
            toggled={showMobileMenu}
            toggle={setShowMobileMenu}
          />
        </div>

        <div className="order-2 col-span-4">
          <img
            className={`max-w-52 m-auto
            opacity-0 ${scrollNumber > 10 && "opacity-100"}
            transition-opacity delay-300 ease-linear`}
            src={logoHeader.src}
            alt="logo cenotes"
          />
        </div>

        <div className="hidden">
          <a href="#">Home</a>
          <a href="#location">Location</a>
          <a href="#availability">Availability</a>
          <a href="#invest">Why invest in tulum?</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="order-3 font-semibold text-grey-50">
          <a>EN</a> | <a>ES</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
