import React from "react";
import ShowDailyTime from "./showDailyTime";

function ShowTime (props) {
    return (
        props.times.repeat === "daily" ?
            <div className="showTime">
                {props.times.isRepeat && props.times.repeatTime > 0 &&
                <div className="repeatTime">
                    <p><span>{props.times.repeatTime}</span> Day{ props.times.repeatTime > 1 ? "s":""}</p>
                </div>
                }
                <ShowDailyTime times={props.times.time}/>
            </div> :
            ""
    );
}

export default ShowTime ;