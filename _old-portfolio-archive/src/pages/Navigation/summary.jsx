const Summary = ({ fadeOut }) => {
    return (
        <div className={`navigation-summary ${fadeOut ? 'fade-out' : ''}`}>
            I&apos;m a front-end developer with six years of experience building responsive applications using React, Redux, and Electron. I helped develop TableCaptain V2, an industry-leading poker room management system, focusing on real-time features, state management, and seamless API integration with GraphQL and Axios. Skilled in translating Figma designs into functional code, I deliver scalable, user-centered solutions that enhance performance and usability.
        </div>
    )
}

export default Summary;
