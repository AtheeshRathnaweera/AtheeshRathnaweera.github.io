import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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
      className={`py-6 !px-10 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 100,
        top: 0,
        background: "var(--color-bg)",
      }}
    >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl dark:text-white">
          Atheesh Rathnaweera
        </span>
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
