import "./Styles/resume.scss";
import ResumePDF from "../assets/AaronLilla_Resume.pdf";

const Resume = () => {
  return (
    <div className="resume-container fade-in">
      <h1>Resume</h1>
      <div className="resume-content">
        <iframe
          src={ResumePDF}
          title="Aaron Lilla Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Resume;
