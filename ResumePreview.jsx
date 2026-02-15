 import React from "react";

const ResumePreview = ({ resume }) => {
  return (
    <div className="border shadow p-4" style={{ display: "flex", height: "auto", maxWidth: "800px", margin: "0 auto" }}> {/* Fixed max width */}
      <div style={{ flex: 1, backgroundColor: resume.color, color: "#fff", padding: "20px" }}>
        <img
          src={typeof resume.image === 'string' ? resume.image : (resume.image ? URL.createObjectURL(resume.image) : "https://via.placeholder.com/100")}
          alt="Profile"
          className="rounded-circle mb-3"
          width={100}
        />
        <h3>{resume.name}</h3>
        <p>{resume.email}</p>
        <p>{resume.phone}</p>
        <h5>About Me</h5>
        <p style={{ whiteSpace: "pre-wrap" }}>{resume.summary}</p> {/* Line breaks preserve */}
        <h5>Skills</h5>
        <p style={{ whiteSpace: "pre-wrap" }}>{resume.skills}</p> {/* Line breaks preserve */}
        <h5>Languages</h5>
        <p style={{ whiteSpace: "pre-wrap" }}>{resume.languages}</p> {/* Line breaks preserve */}
      </div>
      <div style={{ flex: 1, backgroundColor: "#fff", padding: "20px", color: "#000" }}>
        <h4>Education</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>{resume.education}</p> {/* Line breaks preserve */}
        <h4>Experience</h4>
        <p style={{ whiteSpace: "pre-wrap" }}>{resume.experience}</p> {/* Line breaks preserve */}
        <h4>Contact</h4>
        <p>LinkedIn: {resume.linkedin}</p>
        <p>GitHub: {resume.github}</p>
      </div>
    </div>
  );
};

export default ResumePreview;