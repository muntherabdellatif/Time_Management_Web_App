import React , {useState} from "react";
import WorkList from "./workList";
import ListTitle from "./listTitle";

function MyWork (props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleList = ()=> {
        setIsOpen(!isOpen);
    }
    return (
        <div className="toggle-list">
            <ListTitle title={props.title} toggle={toggleList} isOpen={isOpen}/>
            <div className={isOpen ?"list" : "list hidden"}>
                <WorkList select={props.select}/>
            </div>
        </div>
    );
}

export default MyWork ;