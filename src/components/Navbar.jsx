import {useState} from 'react';

const Navbar = ({ logo, links }) => {
    const [active, setActive] = useState(links[0]);

  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold">{logo}</h1>

      <ul className="flex gap-8 text-lg">
        {links.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`}
            onClick={()=>setActive(link)}
            className={`hover:text-gray-500 ${active === link ? 'font-bold underline' : ''}`}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
