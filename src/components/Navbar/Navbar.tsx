import "./navbar.css";
// hooks
import { useState } from "react";
// assets
import logo from "/logo.svg";
import menu_logo from "/icon-hamburger.svg";
import close_logo from "/icon-close.svg";

// arr
const navLinks: string[] = ["Home", "About", "Contact", "Blog", "Careers"];

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <>
      <header className="py-[0.8rem] px-[3rem] max-w-[80rem] mx-auto sticky top-0 z-[10] bg-white">
        <nav className="flex w-full justify-between items-center">
          <img src={logo} alt="logo" />
          <ul
            role="list"
            className="flex space-x-[2rem] text-NeutralGrayishBlue max-lg:hidden"
          >
            {navLinks.map((e, i) => {
              return (
                <li role="listitem" key={i}>
                  <a href={`#${e}`}>{e}</a>
                </li>
              );
            })}
          </ul>
          <button className=" px-[1.3rem] py-[0.6rem] btn max-lg:hidden">
            Request Invite
          </button>
          <img
            src={toggleMenu ? close_logo : menu_logo}
            alt="logo"
            aria-label="menu logo"
            role="button"
            className="lg:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </nav>
      </header>
      {toggleMenu && <NavbarMobile tog={() => setToggleMenu(false)} />}
    </>
  );
}

const NavbarMobile = ({ tog }) => {
  return (
    <div className="bg-[#00000096] fixed w-full h-full top-0  pt-[4rem]">
      <ul
        role="list"
        className="flex space-y-[1rem] w-[90%] mx-auto items-center py-[1.5rem] bg-white rounded-md  flex-col"
      >
        {navLinks.map((e, i) => {
          return (
            <li role="listitem" onClick={tog} key={i}>
              <a href={`#${e}`}>{e}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
