import React from "react";

function DailyTimeUnit (props) {
    return (
        <div className={props.hover === props.id ? "time" : "time active"} 
        style={{
            width: `${props.period}px`,
            left: `${props.start}px`
        }}>
        </div>
    );
}

export default DailyTimeUnit ;