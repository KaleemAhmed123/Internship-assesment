import React, { useState } from "react";
import "./Tabs.scss";
import { tabLinks } from "../../const/const";
import { Link, NavLink, useNavigate } from "react-router-dom"; // NavLink fro active prop

const Tabs = () => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="tabs-wrapper">
      {/* navLinks and btnDonate */}
      <ul className="tabs">
        {tabLinks.map(({ linkName, path }, idx) => {
          return (
            <li key={idx}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsShow((prev) => !prev)}
              >
                {linkName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
