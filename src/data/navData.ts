export interface NavbarItemTypes {
  label: string; // Display label for the navbar item
  link: string; // URL or route for the navbar item
}

// NavbarVariables interface represents the variables needed for the navbar
export interface NavbarItem {
  about: NavbarItemTypes;

  projects: NavbarItemTypes;
  skills: NavbarItemTypes;
  blogs: NavbarItemTypes;
  contact: NavbarItemTypes;
}

const navbarItem: NavbarItem = {
  about: { label: "About", link: "/about" },
  // experience: { label: 'Experience', link: '/experience' },
  projects: { label: "Projects", link: "/projects" },
  skills: { label: "Skills", link: "/skills" },
  blogs: { label: "Blogs", link: "/blogs" },
  contact: { label: "Contact", link: "/contact" },
};

export default navbarItem;
