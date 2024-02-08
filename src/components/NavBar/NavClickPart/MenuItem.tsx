import { navbarItem1 } from "../../../data/navData";

const MenuItem = () => {
  const navItems = Object.values(navbarItem1).slice(0, -2);

  return (
    <nav className="fixed top-0 left-0 bottom-0 w-full bg-black1 pt-20 translate-x-full will-change-transform">
      <ul className="flex flex-col gap-4 p-2 list-none m-0">
        {Object.values(navItems).map((item, index) => (
          <li
            key={index}
            className={`mb-10 ${
              item.label === "Contact" ? "bg-principal" : ""
            }text-Blanc block transform-origin-left font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl transform opacity filter text-center rounded-full p-4`}
          >
            <a
              href={item.link}
              className="text-Blanc list-none m-0 text-2xl xsm:text-5xl font-argenMed md:m-6"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuItem;
