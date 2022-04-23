import React from "react";
import {userData} from "../../../data/data"
import ProgressBar from "../../share/progressBar";
import ShowTime from "./showTime";

function WorkDetails (props) {
    let work =(userData.works).filter((work)=>{
        return work.id === props.id;
    });
    work=work[0];
    return (
        <div className="workDescription">
            <h1 className="title">{work.name}</h1>
            <p className="description">{work.description}</p>
            <div className="container">
                <span className="relatedTo">Related To: {work.relatedTo}</span>
                <ProgressBar percent={work.progress}/>
            </div>
            <ShowTime times={work.times}/>
        </div>
    );
}

export default WorkDetails ;