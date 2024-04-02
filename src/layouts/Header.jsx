import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logoHeader from "@/assets/svgs/logo_header.svg";

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
      className={`Header
      ${showMobileMenu || scrollNumber > 10 ? "bg-accent-700" : "bg-transparent"}
      fixed top-0 z-20 w-full
      transition-colors delay-300 ease-linear`}
    >
      <div
        className="Header__content
        container m-auto
        py-3 px-2 md:pr-0
        grid grid-cols-6 gap-2
        items-center justify-items-center"
      >
        <div className="flex order-1">
          <Hamburger
            size={28}
            color="#fff"
            distance="lg"
            rounded
            toggled={showMobileMenu}
            toggle={setShowMobileMenu}
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          />
        </div>

        <div className="order-2 col-span-3">
          <img
            className={`max-w-48 w-full
            ${showMobileMenu || scrollNumber > 10 ? "opacity-100" : "opacity-0"}
            transition-opacity delay-300 ease-linear`}
            src={logoHeader.src}
            alt="logo cenotes"
          />
        </div>

        <div
          className={`Header__content__links
            ${showMobileMenu ? "Header__content__links--active" : "hidden"}
            transition-all delay-300 ease-in`}
        >
          <a href="#">Home</a>
          <a href="#location">Location</a>
          <a href="#availability">Availability</a>
          <a href="#invest">Why invest in tulum?</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        <div
          className="flex gap-4 order-3 col-span-2
            justify-self-end
            font-semibold text-xl text-grey-50"
        >
          <a>EN</a> | <a>ES</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
