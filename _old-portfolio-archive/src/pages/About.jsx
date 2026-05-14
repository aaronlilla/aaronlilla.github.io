import "./Styles/about.scss";

const About = () => {
  return (
    <div className="about-container fade-in">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          <strong>With over six years of experience as a front-end developer</strong>,
          I specialize in creating responsive, interactive, and high-quality web and
          desktop applications using <strong>React</strong> and <strong>Redux</strong>.
          My journey in tech includes key roles in pioneering projects, where I have
          consistently delivered robust, scalable solutions. I was a founding team
          member of TableCaptain V2, a sophisticated <strong>Electron</strong>-based app
          that transformed poker room management through real-time waitlists, dealer
          rotations, and synchronized TV displays. This state-of-the-art system, with
          <strong> WebSocket</strong> integration for real-time updates, established itself
          as an industry leader and stands as a testament to my commitment to innovation
          and usability.
        </p>
        <p>
          Beyond web applications, I have built <strong>desktop applications </strong>
          from the ground up with <strong>Electron</strong>, adding valuable features
          like auto-updating and custom hotfixes. I also emphasize effective data
          handling in my projects, working with <strong>GraphQL and Axios </strong>
          to manage complex data flows efficiently. Translating <strong>Figma </strong>
          designs into pixel-perfect, intuitive interfaces is another key strength,
          allowing me to bridge user needs and functional design with precision.
        </p>

        <h2>Core Skills</h2>
        <ul>
          <li><strong>Languages & Tools:</strong> JavaScript, HTML, CSS, SASS, Electron, Websockets, Git, Webpack, NPM, Yarn</li>
          <li><strong>Frameworks & Libraries:</strong> React, Redux, Electron, Bootstrap, Material-UI, Emotion</li>
          <li><strong>Real-Time & Data Management:</strong> WebSockets, GraphQL, Axios</li>
          <li><strong>UI/UX Design:</strong> Proficient in creating responsive, mobile-friendly interfaces, with experience translating Figma designs into live applications</li>
          <li><strong>Build & Automation:</strong> Expert in managing code, dependencies, and builds with tools like Git, Webpack, and Babel</li>
          <li><strong>Performance & Optimization:</strong> Skilled in improving app performance, responsive design, and user-centered UI design</li>
        </ul>

        <h2>Notable Projects</h2>
        <ul>
          <li>
            <strong>TableCaptain V2:</strong> A comprehensive poker room management system that revolutionized real-time management for the casino industry. This Electron-based application integrated a fully functional waitlist, dealer rotations, and WebSocket-enabled TV displays for live updates, setting a new industry standard.
          </li>
          <li>
            <strong>USCRE Online:</strong> A single-page application for commercial real estate that streamlines real estate quoting and property data search. This project, built with React and Redux, has made real estate data more accessible and easier to navigate for end-users.
          </li>
        </ul>

        <h2>Previous Industry Experience</h2>
        <p>
          Before diving into tech full-time, I worked as the <strong>Packaging Manager</strong> at <strong>Evergreen Organix</strong>, a large-scale cannabis production facility. Here, I managed the inventory of cannabis-based products, operated CO2 critical extraction machines, and ensured regulatory compliance. My role involved:
        </p>
        <ul>
          <li><strong>Inventory Management:</strong> Oversaw a warehouse of cannabis products valued in the millions.</li>
          <li><strong>CO2 Extraction:</strong> Ran extraction machines to produce high-quality vapes and concentrates.</li>
          <li><strong>Compliance:</strong> Utilized METRC software to maintain meticulous records, manage plant tags, and ensure compliance with industry standards.</li>
        </ul>

        <h2>Personal Approach and Values</h2>
        <ul>
          <li><strong>Detail-Oriented:</strong> I’m dedicated to writing clean, efficient code and delivering a polished final product.</li>
          <li><strong>Collaborative:</strong> I value teamwork and believe that successful projects result from collective effort and mutual respect.</li>
          <li><strong>Adaptable and Quick-Learning:</strong> I am comfortable learning new technologies and adapting to fast-paced environments, which allows me to remain versatile and agile in my work.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
