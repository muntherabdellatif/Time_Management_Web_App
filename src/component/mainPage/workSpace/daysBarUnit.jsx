import React  from "react";

function DaysBarUnit (props) {
    return (
        <div 
            className={`day ${props.active && 'active'} ${props.selectedDay && 'selected'}`}
            onClick={()=>{props.select(props.day)}}
        >
            {props.day}
        </div>
    );
}

export default DaysBarUnit ;