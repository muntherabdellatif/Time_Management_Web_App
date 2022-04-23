import React from "react";
import ShowDailyTime from "./showDailyTime";

function ShowTime (props) {
    return (
        <div className="showTime">
            {props.times.repeat === "daily" && <ShowDailyTime times={props.times.time}/>}
        </div>
    );
}

export default ShowTime ;