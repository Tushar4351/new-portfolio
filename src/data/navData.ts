export interface NavbarItemTypes {
    label: string;  // Display label for the navbar item
    link: string;   // URL or route for the navbar item
  }
  
  // NavbarVariables interface represents the variables needed for the navbar
  export interface NavbarItem {
    home: NavbarItemTypes;
    aboutMe: NavbarItemTypes;
    experience: NavbarItemTypes;
    projects: NavbarItemTypes;
    skills: NavbarItemTypes;
    blogs: NavbarItemTypes;
    contactMe: NavbarItemTypes;
}

const navbarItem: NavbarItem = {
    home: { label: 'Home', link: '/' },
    aboutMe: { label: 'About Me', link: '/about' },
    experience: { label: 'Experience', link: '/experience' },
    projects: { label: 'Projects', link: '/projects' },
    skills: { label: 'Skills', link: '/skills' },
    blogs: { label: 'Blogs', link: '/blogs' },
    contactMe: { label: 'Contact Me', link: '/contact' },
  };
  
  export default navbarItem;