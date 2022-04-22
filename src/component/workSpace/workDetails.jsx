import React from "react";
import {userData} from "../../data/data"
import ProgressBar from "../sidebar/progressBar";

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
        </div>
    );
}

export default WorkDetails ;