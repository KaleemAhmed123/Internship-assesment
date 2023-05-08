import React from "react";
import "./ProjectStatus.scss";
const ProjectStatus = () => {
  return (
    <>
      <div className="status">
        <div className="labelBtn">
          <h3 className="heading-two">Project Status</h3>
          <button className="btn btn-green">Active</button>
        </div>
        <div className="project-container">
          <div className="project-left">
            <div className="first">
              <span className="label">Project start date</span>
              <p className="para">27 march 2023</p>
            </div>
            <div className="first">
              <span className="label">Planned duration</span>
              <p className="para">35 days</p>
            </div>
          </div>
          <div className="project-left">
            <div className="first">
              <span className="label">Elapsed time</span>
              <p className="para">0 days</p>
            </div>
            <div className="first">
              <span className="label">Timeline</span>
              <p className="link">Click to see</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectStatus;
