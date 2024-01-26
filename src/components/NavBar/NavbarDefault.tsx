import { navbarItem1 } from "../../data/navData";

function NavbarDefault() {
  const navItems = Object.values(navbarItem1).slice(0, -3);

  return (
    <nav className="flex gap-10 items-center">
      <ul className="flex items-center gap-2 text-black1 font-argenMed">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className={`px-8 py-4 rounded-2xl text-lg hover:bg-black1/20 ${
                item.label === "Home" ? "bg-black1/20" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <a
          href={navbarItem1.contact.link}
          className="font-argenMed px-8 py-4 rounded-2xl text-Blanc bg-black1"
        >
          {navbarItem1.contact.label}
        </a>
      </div>
    </nav>
  );
}

export default NavbarDefault;
