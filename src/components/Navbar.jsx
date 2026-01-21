const Navbar = ({ logo, links }) => {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">{logo}</h1>

      <ul className="flex gap-8 text-lg">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="hover:text-gray-500">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
