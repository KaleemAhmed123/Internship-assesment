import React from "react";
import "./Banner.scss";
const Banner = () => {
  return (
    <div className="wrapper">
      <div className="banner">
        <div className="left">
          <h1 className="sonal">Sonal</h1>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, aut!
          </p>
        </div>
        <div className="right">
          <img src="/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
