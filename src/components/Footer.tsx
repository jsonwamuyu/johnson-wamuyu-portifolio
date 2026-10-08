"use client";
import { navLinks } from "./Navbar";

const Footer = () => {
  // Smooth scroll handler
  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full bg-black/50 text-gray-500">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="hover:text-indigo-100  transition-colors duration-150 cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs  text-center md:text-right">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-indigo-100 ">Johnson Muchiri</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
