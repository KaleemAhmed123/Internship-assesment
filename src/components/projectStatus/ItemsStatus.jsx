import React from "react";
import "./ProjectStatus.scss";
const ItemsStatus = () => {
  return (
    <div className="wrapper">
      <div className="item-status-container">
        <h2 className="heading-one">Item status</h2>
        <div className="current-item">
          <div className="labelBtn">
            <h3 className="heading-two">Current item</h3>
            <button className="btn btn-green">Active</button>
          </div>
          {/*  */}
          <div className="project-container">
            <div className="project-left">
              <div className="first">
                <span className="label">Milestone name</span>
                <p className="para">Moodboard</p>
              </div>
              <div className="first">
                <span className="label">Item name</span>
                <p className="para">Concept design</p>
              </div>
            </div>
            <div className="project-left">
              <div className="first">
                <span className="label">Description</span>
                <p className="para desc">
                  Design for the pages inside the screens on lore ipsum
                </p>
              </div>
              <div className="first">
                <span className="label">Start date</span>
                <p className="para">27 March 2023</p>
              </div>
            </div>
          </div>{" "}
          <div className="next-items">
            <p className="para">Moodboard</p>
            <p className="para">Pallete</p>
            <p className="para">--</p>
            <p className="para">27 March 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsStatus;
