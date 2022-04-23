import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle , faCircle} from '@fortawesome/free-solid-svg-icons';
import ProgressBar from "../../share/progressBar";

function Work (props) {
    let id = props.id ;
    return (
        <div className="Work">
            <h3 className="name">
                {props.status === true ?
                    <FontAwesomeIcon icon={faCheckCircle} className="status"/>:
                    <FontAwesomeIcon icon={faCircle} className="status"/>  }
                <span onClick={()=>{props.select(id); }}>{props.name}</span>
            </h3>
            <ProgressBar percent={props.progress}/>
        </div>
    );
}

export default Work ;