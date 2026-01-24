import NavLink from "./NavLink";

const Navbar = ({ logo, links, active, setActive }) => {
  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">
        <a href="#home" onClick={() => setActive("home")}>
          {logo}
        </a>
      </h1>

      <ul className="flex gap-8 text-lg">
        {links.map((link) => {
          const id = link.toLowerCase();

          return (
            <NavLink
              key={link}
              link={link}
              isActive={active === id}
              onClick={() => setActive(id)}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
