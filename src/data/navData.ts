export interface NavbarItemTypes {
  label: string; // Display label for the navbar item
  link: string; // URL or route for the navbar item
}

// NavbarVariables interface represents the variables needed for the navbar  
export interface NavbarItem {
  home: NavbarItemTypes;
  about: NavbarItemTypes;
 
  projects: NavbarItemTypes;
  skills: NavbarItemTypes;
  blogs: NavbarItemTypes;
  contact: NavbarItemTypes;
}

export const navbarItem1: NavbarItem = { 
  home: { label: "Home", link: "/" },
  // experience: { label: 'Experience', link: '/experience' },
  projects: { label: "Projects", link: "/projects" },
 
   blogs: { label: "Blogs", link: "/blogs" },
  contact: { label: "Contact Me", link: "/contact" },
  about: { label: "About", link: "/about" },
  skills: { label: "Skills", link: "/skills" }
};

export const navbarItem2: NavbarItem = { 
  home: { label: "Home", link: "/" },
  about: { label: "About", link: "/about" },
  projects: { label: "Projects", link: "/projects" },
  skills: { label: "Skills", link: "/skills" },
  // experience: { label: 'Experience', link: '/experience' },
  contact: { label: "Contact", link: "/contact" },
 
   blogs: { label: "Blogs", link: "/blogs" },

 
};
