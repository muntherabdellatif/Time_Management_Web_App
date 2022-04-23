import React from "react";
import Agenda from "../agenda/Agenda"
import WorkDetails from "./workDetails"

function WorkSpace (props) {
    return (
        <div className="workSpace">
            {props.showWork.show ? <WorkDetails id={props.showWork.id}/> :  
            <Agenda view={props.view}/>}
        </div>
    );
}

export default WorkSpace ;