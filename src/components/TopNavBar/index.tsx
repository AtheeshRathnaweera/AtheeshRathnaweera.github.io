import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
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

  return (
    <Navbar
      fluid
      className="py-6 !px-10"
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
