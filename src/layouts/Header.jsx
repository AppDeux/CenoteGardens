import logoHeader from "../assets/svgs/logo_header.svg";

const Header = () => {
  return (
    <header className="">
      <img src={logoHeader.src} alt="logo cenotes" />

      <div>
        <a href="#">Home</a>
        <a href="#location">Location</a>
        <a href="#availability">Availability</a>
        <a href="#invest">Why invest in tulum?</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>

      <div>
        <a>EN</a> | <a>ES</a>
      </div>
    </header>
  );
};

export default Header;
