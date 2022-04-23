import React from "react";

function DailyTimeUnitDetail (props) {
    let startHour = props.time.startHour < 10 ? `0${props.time.startHour}`: props.time.startHour;
    let startMin = props.time.startMin < 10 ? `0${props.time.startMin}`: props.time.startMin;
    let endHour = props.time.endHour < 10 ? `0${props.time.endHour}`: props.time.endHour;
    let endMin = props.time.endMin < 10 ? `0${props.time.endMin}`: props.time.endMin; 
    return (
        <div className="time-detail" 
            onMouseEnter={()=>{props.setHoverIndex(props.id)}}
            onMouseLeave={()=>{props.setHoverIndex("")}}
            >
            <span>from : </span>
            <span>{startHour}:{startMin}</span>
            <span> to : </span>
            <span>{endHour}:{endMin}</span>
        </div>
    );
}

export default DailyTimeUnitDetail ;