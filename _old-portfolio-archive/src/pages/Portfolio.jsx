import { useSelector } from "react-redux";
import portfolioMap from "./Portfolio/helpers";
import "./Styles/portfolio.scss";

const Portfolio = () => {
    const selectedPortfolioSubItem = useSelector(state => state.navigation.selectedPortfolioSubItem);
    const portfolioItem = portfolioMap[selectedPortfolioSubItem];

    // Function to check if the preview is a YouTube link
    const isYouTubeUrl = (url) => {
        return url.includes("youtube.com") || url.includes("youtu.be");
    };

    return (
        <div className="portfolio-container">
            <h1>{portfolioItem?.title}</h1>
            <p>{portfolioItem?.description}</p>
            <div className="portfolio-item-container">
                {isYouTubeUrl(portfolioItem?.preview) ? (
                    <iframe
                        width="100%"
                        height="100%"
                        src={portfolioItem.preview.replace("watch?v=", "embed/")}
                        title={portfolioItem?.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <img src={portfolioItem?.preview} alt={portfolioItem?.title} />
                )}
            </div>
            <ul className="technologies-list">
                {portfolioItem?.technologies?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <p>{portfolioItem?.summary}</p>
        </div>
    );
};

export default Portfolio;
