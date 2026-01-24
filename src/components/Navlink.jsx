const NavLink = ({ link, isActive, onClick }) => {
  return (
    <li>
      <a
        href={`#${link.toLowerCase()}`}
        onClick={onClick}
        className={`hover:text-gray-500 ${
          isActive ? "font-bold underline" : ""
        }`}
      >
        {link}
      </a>
    </li>
  );
};

export default NavLink;
