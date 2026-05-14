import { socials } from "./helpers.jsx";

const Socials = () => {
    return (
        <div className="navigation-socials">
            {socials.map((social) => (
                <a href={social.url} key={social.name}>
                    <img src={social.icon} alt={social.name} />
                </a>
            ))}
        </div>
    )
}

export default Socials;