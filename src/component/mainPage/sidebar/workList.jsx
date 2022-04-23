import React from "react";
import Work from "./work";
import {userData} from "../../../data/data"

function WorkList (props) {
    let works = userData.works ;
    let list = works.map((work,index)=>{
        return (
            <Work 
                key = {index}
                name={work.name}
                progress = {work.progress}
                status = {work.isDone}
                select = {props.select}
                id = {work.id}
            />
        );
    })
    return list ;
}

export default WorkList ;