import "./navbar.css";
// assets
import logo from "/logo.svg";
export default function Navbar() {
  const navLinks: string[] = ["Home", "About", "Contact", "Blog", "Careers"];
  return (
    <>
      <header className="py-[0.8rem] px-[3rem] max-w-[80rem] mx-auto sticky top-0">
        <nav className="flex w-full justify-between items-center">
          <img src={logo} alt="logo" />
          <ul
            role="list"
            className="flex space-x-[2rem] text-NeutralGrayishBlue "
          >
            {navLinks.map((e, i) => {
              return (
                <li role="listitem" key={i}>
                  <a href={`#${e}`}>{e}</a>
                </li>
              );
            })}
          </ul>
          <button className=" px-[1.3rem] py-[0.6rem] btn ">
            Request Invite
          </button>
        </nav>
      </header>
    </>
  );
}
