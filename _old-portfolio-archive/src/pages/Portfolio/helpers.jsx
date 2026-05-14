const USCREAssetClaimPreview = new URL('../../assets/portfolio/usrce-assetclaim.gif', import.meta.url).href;
const USCREPropertySearchPreview = new URL('../../assets/portfolio/uscre-propertysearch.gif', import.meta.url).href;
const USCREPropertyFilterPreview = new URL('../../assets/portfolio/usrce-advancedpropertyfilter.gif', import.meta.url).href;

const portfolioMap = {
    "TC2 Employee Manager": {
        title: "TC2 EMPLOYEE MANAGER",
        description: "A comprehensive management system for casino employee data, optimized for high-security environments.",
        summary: "The TC2 Employee Manager streamlines the management of employee information within the casino industry, featuring real-time updates and efficient tracking. Designed for secure and rapid data access, it reduces administrative tasks by consolidating employee records, status updates, and workflows in a single platform. With technologies like Electron and WebSockets, it ensures both offline and online functionality.",
        preview: "https://www.youtube.com/embed/wgbSgOx5LfE?si=P1k-b__5wAZJwIon",
        technologies: ["React", "Redux", "Electron", ".NET", "Websockets", "Webpack", "NPM"],
    },
    "TC2 Waitlist": {
        title: "TC2 WAITLIST",
        description: "An advanced waitlist management tool tailored for casinos to maximize guest experience and efficiency.",
        summary: "This system enhances the management of casino waitlists, allowing staff to quickly add, modify, or remove guests in real time. With a streamlined UI powered by React and Redux, users receive live waitlist updates through WebSockets, improving response times and customer satisfaction. Designed for flexibility, it integrates seamlessly into the casino’s existing systems, providing a smooth experience on both desktop and mobile setups.",
        preview: "https://www.youtube.com/embed/KZC2kZ4esOI?si=GlSxBDfoH8uRJZCX",
        technologies: ["React", "Redux", "Electron", ".NET", "Websockets", "Webpack", "NPM"],
    },
    "TC2 Table Manager": {
        title: "TC2 TABLE MANAGER",
        description: "An interactive table management system for casinos, enhancing staff's ability to organize and manage table assignments.",
        summary: "Built for casino environments, TC2 Table Manager allows efficient table allocation and management. Featuring real-time data sync, this system ensures table statuses are always current, providing employees with instant access to available seating and usage statistics. By leveraging Electron for a desktop-friendly experience, it integrates into the casino’s broader ecosystem and streamlines on-floor operations.",
        preview: "https://www.youtube.com/embed/TeF75Xz1YYg?si=8PPV-q0cFBaAXGlQ",
        technologies: ["React", "Redux", "Electron", ".NET", "Websockets", "Webpack", "NPM"],
    },
    "TC2 Floor Editor": {
        title: "TC2 FLOOR EDITOR",
        description: "A dynamic floor plan editor for casinos, simplifying layout adjustments and planning in real-time.",
        summary: "This tool is designed for the casino industry to allow quick and efficient editing of floor plans, adjusting table placements, and managing layout changes on the go. Using Electron and WebSockets, the TC2 Floor Editor provides a visual representation of the floor with drag-and-drop functionality. Updates are instantly shared across devices, ensuring that all staff members have a consistent view of the casino layout.",
        preview: "https://www.youtube.com/embed/spwbp0cndwo?si=KVe5EIC-PE67kjty",
        technologies: ["React", "Redux", "Electron", ".NET", "Websockets", "Webpack", "NPM"],
    },
    "TC2 Auto Updater": {
        title: "TC2 AUTO UPDATER",
        description: "A robust auto-update solution ensuring casino software is always current and secure with minimal user intervention.",
        summary: "TC2 Auto Updater automates the update process for casino software, reducing downtime and maintaining system security. Users receive notifications about updates, with Electron ensuring seamless transitions between software versions. This tool prioritizes efficiency and minimizes disruptions, offering a streamlined process for applying software improvements and security patches.",
        preview: "https://www.youtube.com/embed/8MTiMwkA7CU?si=x6DPLEC-7xjAbXGi",
        technologies: ["React", "Redux", "Electron", ".NET", "Websockets", "Webpack", "NPM"],
    },
    "TC2 Waitlist Display": {
        title: "TC2 WAITLIST DISPLAY",
        description: "A visual waitlist display system, optimized for easy viewing and designed for casino patrons and staff.",
        summary: "This display system is intended for public and staff-facing screens, showing real-time waitlist statuses and helping manage customer expectations. Using WebSockets for instant updates, it reflects changes in real time as waitlist statuses change, ensuring patrons have a clear understanding of wait times. React and Electron provide a smooth and reliable experience across display devices.",
        preview: "https://www.youtube.com/embed/cPGJ_oQv8CM?si=UKpFKbHO4AlZoYnD",
        technologies: ["React", "Redux", "Electron", ".NET", "Websockets", "Webpack", "NPM"],
    },
    "USCRE Asset Claim": {
        title: "USCRE ASSET CLAIM SYSTEM",
        description: "A comprehensive asset claim management system tailored for the commercial real estate sector.",
        summary: "The USCRE Asset Claim System provides a centralized solution for tracking and managing asset claims in commercial real estate. Built with a robust backend powered by Node.js and PostgreSQL, it supports high volumes of data, with AWS providing scalable storage. It enables users to submit, track, and manage claims, with React and Redux ensuring a responsive and efficient front-end experience.",
        preview: USCREAssetClaimPreview,
        technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "AWS", "Webpack", "NPM"],
    },
    "USCRE Property Search": {
        title: "USCRE PROPERTY SEARCH",
        description: "A powerful property search engine for commercial real estate, allowing users to locate properties using various filters.",
        summary: "USCRE Property Search is designed to streamline the process of finding commercial real estate properties. With advanced filtering options and an intuitive interface built with React and Redux, users can easily refine their searches based on specific criteria. Data storage and retrieval are handled by PostgreSQL and Node.js, ensuring fast access to detailed property listings.",
        preview: USCREPropertySearchPreview,
        technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "AWS", "Webpack", "NPM"],
    },
    "USCRE Advanced Property Filter": {
        title: "USCRE ADVANCED PROPERTY FILTER",
        description: "A customizable filter for commercial property listings, enhancing user ability to narrow down options.",
        summary: "The USCRE Advanced Property Filter enables users to apply complex filters to large datasets, narrowing down commercial real estate listings to match precise requirements. Built with a focus on performance, the system uses AWS and PostgreSQL to handle data storage efficiently. React and Redux create a responsive, user-friendly experience that caters to professional real estate agents and investors.",
        preview: USCREPropertyFilterPreview,
        technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "AWS", "Webpack", "NPM"],
    },
};

export default portfolioMap;