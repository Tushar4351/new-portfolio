import navbarItem from "../data/navData";

const NavItems = () => {
  return (
    <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
      <div className="bg-Blanc rounded-full py-2">
        {Object.values(navbarItem).map((item, index) => (
          <a
            key={index} // Add a unique key prop
            className={`text-black1 px-4 py-2 mt-2 text-xl font-argenMed ${
              item.label === "Contact"
                ? "rounded-full bg-principal text-black1"
                : "rounded-lg"
            } md:mt-0 md:ml-4 `}
            href={item.link}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavItems;
