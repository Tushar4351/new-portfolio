export interface AboutItemTypes {
    title: string; // Display label for the navbar item
    description: string; // URL or route for the navbar item
  }
  
  // NavbarVariables interface represents the variables needed for the navbar  blogs: NavbarItemTypes;
  export interface NavbarItem {
    home: AboutItemTypes;
    about: AboutItemTypes;
   
    projects: AboutItemTypes;
    skills: AboutItemTypes;
   
    contact: AboutItemTypes;
  }