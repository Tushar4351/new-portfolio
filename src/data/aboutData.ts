export interface AboutItemTypes {
  title: string; // Display label for the navbar item
  description: string; // URL or route for the navbar item
}

// NavbarVariables interface represents the variables needed for the navbar  blogs: NavbarItemTypes;
export interface AboutItem {
  discover: AboutItemTypes;
  define: AboutItemTypes;
  develop: AboutItemTypes;
  deliver: AboutItemTypes;
}

const AboutItem: AboutItem = {
  discover: {
    title: "Discover",
    description:
      "Brainstorming sessions in order to take their needs and company goals into account. Define the scope and objectives of the project and lays a fundamental foundation for everything that comes after.",
  },
  define: {
    title: "Define",
    description: 
      "Gather additional information about the ideal client, market opportunities and design sprint. Getting direct feedback from users themselves through user surveys and field activities.",
  },
  develop: {
    title: "Develop",
    description:
      "Define the user experience, test and evaluate design concepts, and analyze how your designs will inform behavior and effect the experience of the user.",
  },
  deliver: {
    title: "Deliver",
    description:
      "Determine design patterns, elements of template pages, different framework options, and work with developers to test design functionality.",
  },
};

export default AboutItem;
