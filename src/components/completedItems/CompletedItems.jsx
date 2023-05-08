import React from "react";
import "./CompletedItems.scss";
const CompletedItems = () => {
  return (
    <div className="wrapper-completed">
      <div className="completed-items">
        <div className="left">
          <h2 className="heading-two">Completed Items</h2>
          <p className="para">
            Items submitted and are approved will appear here
          </p>
          <img src="/ProductLaunch.png" alt="" />
        </div>
        <div className="right">
          <h3 className="heading-two">Upcoming event</h3>
          <div className="labels">
            <span className="label">Milestone names</span>
            <span className="label">Items</span>
            <span className="label">Planned start</span>
          </div>
          <div className="items">
            <div className="item">
              <p className="para">Concept</p>
              <p className="para">Moodboard,Presentation,design</p>
              <p className="para">27 March 2023</p>
            </div>
            <div className="item">
              <p className="para">Concept</p>
              <p className="para">Moodboard,Presentation,design</p>
              <p className="para">27 March 2023</p>
            </div>
          </div>
          <p className="link">All upcoming events</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedItems;
