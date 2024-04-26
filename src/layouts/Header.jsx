import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logoHeader from "@/assets/svgs/logo_header.svg";
import {
  getLangFromUrl,
  useTranslations,
  useTranslatedPath,
} from "@/i18n/utils";

const Header = ({ url }) => {
  const lang = getLangFromUrl(url);
  const t = useTranslations(lang);
  const translatePath = useTranslatedPath(lang);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollNumber, setScrollNumber] = useState(0);

  // Asigna el movimiento smooth para los a #
  useEffect(() => {
    setScrollNumber(window.scrollY);

    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        });
      });
    };

    smoothScroll();

    return () => {
      // Cleanup
      const links = document.querySelectorAll('a[href^="#"]');
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollNumber(window.scrollY);
    });

    // si showMobileMenu es true, bloquear scroll vertical
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [scrollNumber, showMobileMenu]);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`Header
      ${showMobileMenu || scrollNumber > 20 ? "bg-accent-700" : "bg-transparent"}
      fixed top-0 z-30 w-full
      transition-colors delay-300 ease-linear`}
    >
      <div
        className="Header__content
        container m-auto
        py-3 px-2 lg:pr-0
        grid grid-cols-6 lg:grid-cols-12 gap-2 lg:gap-0
        items-center justify-items-center"
      >
        <div className="flex order-1 lg:hidden">
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
            label="false"
            role="button"
          />
        </div>

        <div className="order-2 lg:order-1 col-span-3 lg:col-span-3">
          <img
            className={`w-44 aspect-[355/73] md:w-48 lg:w-52
            ${showMobileMenu || scrollNumber > 20 ? "opacity-100" : "opacity-0"}
            transition-opacity delay-300 ease-linear`}
            src={logoHeader.src}
            alt="logo cenotes"
          />
        </div>

        <div
          className={`Header__content__links font-subtitle text-grey-50
            ${showMobileMenu ? "Header__content__links--active" : "hidden"}
            transition-all delay-300 ease-in
            lg:h-14
            lg:order-2 lg:col-span-7 w-full lg:pr-8 lg:text-sm xl:text-base lg:text-center
            lg:flex lg:items-center lg:justify-evenly lg:gap-8`}
        >
          <a href="/" className="cursor-pointer" onClick={scrollToTop}>
            {t("nav.home")}
          </a>
          <a href="#location">{t("nav.location")}</a>
          <a href="#availability">{t("nav.availability")}</a>
          <a href="#invest">{t("nav.invest")}</a>
          <a href="http://blog.cenotegardens.com">{t("nav.blog")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </div>

        <div
          className="flex gap-4 order-3 col-span-2 lg:col-span-2
            justify-self-end
            font-semibold text-xl lg:text-base text-grey-50"
        >
          <a href={translatePath("/", "en")}>EN</a> |{" "}
          <a href={translatePath("/", "es")}>ES</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
