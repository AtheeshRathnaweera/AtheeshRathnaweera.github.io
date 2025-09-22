import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import appLogoWhite from "/app_logo_white.png";
import appLogoBlack from "/app_logo_black.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const TopNavBar = () => {
  const location = useLocation();
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShow(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY < lastScrollY.current) {
        setShow(true);
      } else if (window.scrollY > lastScrollY.current) {
        setShow(false);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fluid
      className={`fixed w-full z-[100] top-0 py-6 !px-10 xl:!px-15 transition-transform duration-300 dark:bg-[var(--color-dark-bg)] ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <NavbarBrand href="#home">
        <img
          src={appLogoWhite}
          alt="Atheesh Rathnaweera"
          className="w-12/100 h-auto sm:w-10/100 hidden dark:block"
        />
        <img
          src={appLogoBlack}
          alt="Atheesh Rathnaweera"
          className="w-12/100 h-auto sm:w-10/100 dark:hidden"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navLinks.map((link) => (
          <NavbarLink
            key={link.href}
            href={link.href}
            active={
              (location.hash === "" && link.href === "#home") ||
              location.hash === link.href
            }
          >
            {link.label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
};

export default TopNavBar;
