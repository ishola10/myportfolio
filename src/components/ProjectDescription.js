import React from "react";
import { Link, useParams } from "react-router-dom";
import descriptions from "./descriptions";
import "../styles/ProjectDescription.css";
import Strengthy from "../assets/images/strenghty.png";
import Vaccine from "../assets/images/Desktop - 1.png";
import Scissors from "../assets/images/linkswift.png";
import Predictify from "../assets/images/predictify.png";
import ArogStudio from "../assets/images/arogstudio.png";

function ProjectDescription() {
  const { id } = useParams();
  const projectIndex =
    id === "strengthy"
      ? 0
      : id === "scissors"
      ? 1
      : id === "vaccineapp"
      ? 2
      : id === "predictify"
      ? 3
      : id === "arogstudio"
      ? 4
      : -1;
  const projectName =
    id === "strengthy"
      ? "Strengthy"
      : id === "scissors"
      ? "LinkSwift"
      : id === "vaccineapp"
      ? "VaccineApp"
      : id === "predictify"
      ? "Predictify"
      : id === "arogstudio"
      ? "Arog Studio"
      : "";
  const { description, features, date } = descriptions[projectIndex];
  let projectImage, projectLink;

  switch (id) {
    case "strengthy":
      projectImage = Strengthy;
      projectLink = "https://strengthy.netlify.app/";
      break;
    case "scissors":
      projectImage = Scissors;
      projectLink =
        "https://64fe6d1becfe830993586a57--stately-gumdrop-0f981d.netlify.app/";
      break;
    case "vaccineapp":
      projectImage = Vaccine;
      projectLink = "https://vacineapp.netlify.app/";
      break;
    case "predictify":
      projectImage = Predictify;
      projectLink = "https://vacineapp.netlify.app/";
      break;
    case "arogstudio":
      projectImage = ArogStudio;
      projectLink = "https://arogstudio.com.ng/";
      break;
    default:
      projectImage = "";
      projectLink = "";
  }

  return (
    <div className="project-description">
      <div className="description">
        <Link className="btn" to="/projects">
          ← Back to Portfolio
        </Link>
        <h1>{projectName}</h1>
        <img src={projectImage} alt={projectName} />
        <p>{description}</p>
        <p style={{color:"grey"}}>{date}</p>
        <h2>Features:</h2>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <a className="btnn" href={projectLink}>
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectDescription;
