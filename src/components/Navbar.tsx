
const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },

]

const Navbar = () => {
  return (
    <header className="w-full sticky z-30 top-0 backdrop-blur-md shadow-sm border-b border-white/10">
      <nav className="py-5 flex justify-between container ">
        <div>
          <a href="/" className="font-bold text-5xl text-indigo-500">JW</a>
        </div>
        <ul>
            {navLinks.map((link) => (
                <li key={link.name} className="inline-block ml-10 hover:text-indigo-500">
                    <a href={link.href}>{
                        link.name
                    }</a>
                </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
