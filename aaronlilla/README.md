Personal Portfolio Site

This is the codebase for my personal portfolio website, which showcases my work, skills, and professional experiences. The site is built using modern web technologies and includes a responsive layout to ensure that it works well on both desktop and mobile devices.

Features

Responsive Design: The portfolio is fully responsive, adapting to different screen sizes to ensure a great user experience on any device.

Interactive Navigation: The site includes a navigation bar that changes behavior based on the viewport width. For smaller screens, it features a hamburger menu.

Portfolio Showcase: Includes a dedicated section to showcase various projects I've worked on, categorized for easy browsing.

Animated Gradient Headers: The title "AARON" features an animated gradient effect, adding a visual flair to the website.

Technologies Used

React: The site is built using React for a modular, component-based architecture.

Redux: State management is handled using Redux to maintain the UI state, including page navigation and hamburger menu visibility.

React Router: For client-side routing, enabling smooth navigation between different sections of the site.

Sass/SCSS: Styling is managed using SCSS for better modularity and maintainability.

Getting Started

To run the project locally, follow these steps:

Clone the repository:

git clone <repository-url>
cd portfolio-website

Install dependencies:

npm install

Run the development server:

npm start

The site will be available at http://localhost:3000.

Project Structure

src/components/Navigation.js: The main navigation bar, including a hamburger menu for smaller viewports.

src/components/Menu.js: Contains the list of pages and sub-items for navigation.

src/slices/navigationSlice.js: Redux slice for managing navigation state, including the current page, viewport dimensions, and hamburger menu.

src/index.scss: Main SCSS file for styling.

Key Components

Navigation: The Navigation component manages the main menu, including the hamburger icon for smaller screens. The hamburger state is managed through Redux to maintain global control over its visibility.

Menu: The Menu component provides links to different pages and sub-items within the portfolio.

Responsive Behavior

Hamburger Menu: The navigation bar includes a hamburger menu that appears when the viewport width is less than 1150px. Clicking an item or subitem will automatically close the menu.

Condensed Branding: In compact mode, the site branding changes from "AARON LILLA" to just "A" to save space.

Deployment

The project can be deployed using GitHub Pages or any other static site hosting platform. For GitHub Pages, you can run:

npm run build

Then push the build folder to your repository's gh-pages branch.

Contributing

Contributions are welcome! If you find any issues or have suggestions for new features, feel free to create a pull request or open an issue.
