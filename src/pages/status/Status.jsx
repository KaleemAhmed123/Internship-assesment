import React, { useState, useEffect } from "react";
import ProjectStatus from "../../components/projectStatus/ProjectStatus";
import ItemsStatus from "../../components/projectStatus/ItemsStatus";
import CompletedItems from "../../components/completedItems/CompletedItems";

const Status = () => {
  return (
    <div className="">
      <ProjectStatus />
      <ItemsStatus />
      <CompletedItems />
    </div>
  );
};

export default Status;
