import  { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="w-full fixed top-0 z-30 bg-black/30 backdrop-blur-md border-b border-[1px] border-[#242424]/50">
      <nav className="container mx-auto flex justify-between items-center py-5 px-6">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="font-extrabold text-3xl text-indigo-500"
        >
          JW
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-white">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="hover:text-indigo-400 transition-colors duration-150 cursor-pointer"
            >
              <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-[#242424]/50">
          <ul className="flex flex-col items-center py-6 space-y-6 text-white">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="hover:text-indigo-400 transition-colors duration-150 cursor-pointer text-lg"
              >
                <a href={link.href} onClick={(e) => handleScroll(e, link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
