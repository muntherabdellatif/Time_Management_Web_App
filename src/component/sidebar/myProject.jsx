import React , {useState} from "react";
import ProjectList from "./projectList";
import ListTitle from "./listTitle";

function MyProject (props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleList = ()=> {
        setIsOpen(!isOpen);
    }
    return (
        <div className="toggle-list">
            <ListTitle title={props.title} toggle={toggleList} isOpen={isOpen}/>
            <div className={isOpen ?"list" : "list hidden"}>
                <ProjectList/>
            </div>
        </div>
    );
}

export default MyProject ;