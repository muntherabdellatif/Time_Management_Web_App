import React from "react";
import Project from "./project";
import {userData} from "../../../data/data"

function ProjectList (props) {
    let projects = userData.projects ;
    let list = projects.map((project,index)=>{
        return (
            <Project 
                key = {index}
                name={project.name}
                progress = {project.progress}
                status = {project.isDone}
            />
        );
    })
    return list ;
}

export default ProjectList ;