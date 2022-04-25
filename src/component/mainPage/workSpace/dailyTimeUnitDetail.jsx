import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle , faCircle} from '@fortawesome/free-solid-svg-icons';
import { splitTime } from "../../../common/timeCalculation"

function DailyTimeUnitDetail (props) {
    splitTime();
    let startHour = props.time.startHour < 10 ? `0${props.time.startHour}`: props.time.startHour;
    let startMin = props.time.startMin < 10 ? `0${props.time.startMin}`: props.time.startMin;
    let endHour = props.time.endHour < 10 ? `0${props.time.endHour}`: props.time.endHour;
    let endMin = props.time.endMin < 10 ? `0${props.time.endMin}`: props.time.endMin; 
    return (
        <div className="time-detail" 
            onMouseEnter={()=>{props.setHoverIndex(props.id)}}
            onMouseLeave={()=>{props.setHoverIndex("")}}
            >
            {props.time.isDone === true ?
                    <FontAwesomeIcon icon={faCheckCircle} className="status"/>:
                    <FontAwesomeIcon icon={faCircle} className="status"/>  }
            <span>from : </span>
            <span>{startHour}:{startMin}</span>
            <span> to : </span>
            <span>{endHour}:{endMin}</span>
        </div>
    );
}

export default DailyTimeUnitDetail ;