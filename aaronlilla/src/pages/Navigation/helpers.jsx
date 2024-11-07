import GithubIcon from "../../assets/socials/github.png";
import LinkedInIcon from "../../assets/socials/linkedin.png";
import TwitterIcon from "../../assets/socials/twitter.png";
import GmailIcon from "../../assets/socials/gmail.png";
import SlackIcon from "../../assets/socials/slack.png";
import YoutubeIcon from "../../assets/socials/youtube.png";

export const colorMap = {
    about: "#00bfff",
    contact: "#3cfdbd",
    resume: "#e9a002",
    portfolio: "#e94002",
};

export const portfolioSubItemColorMap = {
    "TC2 Waitlist": "#ff6347", // Tomato
    "TC2 Table Manager": "#ff69b4", // Hot Pink
    "TC2 Floor Editor": "#9370db", // Medium Purple
    "TC2 Auto Updater": "#4682b4", // Steel Blue
    "TC2 Waitlist Display": "#ffa500", // Orange
    "TC2 Employee Manager": "#ff69b4", // Orange
    "USCRE Asset Claim": "#ff6347", // Tomato
    "USCRE Property Search": "#ff69b4", // Hot Pink
    "USCRE Advanced Property Filter": "#9370db", // Medium Purple
};

export const socials = [
    {
      name: "Github",
      url: "https://github.com/aaronlilla",
      icon: GithubIcon
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aaronlilla/",
      icon: LinkedInIcon
    },
    {
      name: "Twitter",
      url: "https://twitter.com/aaronlilla",
      icon: TwitterIcon
    },
    {
      name: "Gmail",
      url: "mailto:aaronjlilla@gmail.com",
      icon: GmailIcon
    },
    {
      name: "Slack",
      url: "https://aaronlilla.slack.com",
      icon: SlackIcon
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@aaronlilla",
      icon: YoutubeIcon
    }
]

export const wrapTextWithSpans = (text) => {
  return text.split('').map((char, index) => (
    <span key={index} style={{ transitionDelay: `${index * 0.05}s` }}>
      {char === ' ' ? '\u00A0' : char} {/* Use a non-breaking space for spaces */}
    </span>
  ));
};