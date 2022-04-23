import React from "react";
import Logout from "./Logout";
import MyWork from "./myWork";
import MyProject from "./myProject";
import ViewController from "./viewController"
import { userData } from "../../../data/data";

function SideBar (props) {
    return (
        <div className="side-bar">
            <Logout name={`${userData.userFirstName} ${userData.userLastName}`}/>
            <ViewController changeView={props.changeView}/>
            <MyWork title={"My Works"} select={props.selectWork}/>
            <MyProject title={"My Project"}/>
        </div>
    );
}

export default SideBar ;