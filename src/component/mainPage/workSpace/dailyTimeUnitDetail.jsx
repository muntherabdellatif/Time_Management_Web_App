import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle , faCircle} from '@fortawesome/free-solid-svg-icons';
import { splitTime } from "../../../common/timeCalculation"

function DailyTimeUnitDetail (props) {
    // splitTime(new Date());
    let startHour = splitTime(props.time.startDate).hour;
    let startMin = splitTime(props.time.startDate).minute;
    let endHour = splitTime(props.time.endDate).hour;
    let endMin = splitTime(props.time.endDate).minute; 
    startHour = startHour < 10 ? `0${startHour}`: `${startHour}`;
    startMin = startMin < 10 ? `0${startMin}`: `${startMin}`;
    endHour = endHour < 10 ? `0${endHour}`: `${endHour}`;
    endMin = endMin < 10 ? `0${endMin}`: `${endMin}`;

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