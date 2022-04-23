import "./mainPage.css";
import SideBar from "./sidebar/SideBar";
import WorkSpace from "./workSpace/workSpace";
import React, { useState } from "react";

function MainPage() {
  const [view, setView] = useState("daily");
  const [showWork, setShowWork] = useState({ show: false, id: null });

  const selectWork = (id) => {
    setShowWork({ show: true, id });
  };
  const changeView = (event) => {
    setShowWork({ show: false });
    setView(event.target.value);
  };
  return (
    <div className="mainPage">
      <SideBar changeView={changeView} selectWork={selectWork} />
      <WorkSpace view={view} showWork={showWork} />
    </div>
  );
}

export default MainPage;