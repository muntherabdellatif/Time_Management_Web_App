import "./App.css";
import SideBar from "./component/sidebar/SideBar";
import WorkSpace from "./component/workSpace/workSpace";
import React, { useState } from "react";

function App() {
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
    <div className="App">
      <SideBar changeView={changeView} selectWork={selectWork} />
      <WorkSpace view={view} showWork={showWork} />
    </div>
  );
}

export default App;
