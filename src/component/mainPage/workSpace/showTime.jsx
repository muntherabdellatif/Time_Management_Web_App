import React from "react";
import ShowDailyTime from "./showDailyTime";
import ShowWeeklyTime from "./ShowWeeklyTime";

function ShowTime (props) {
    let repeat = props.times.repeat;
    return (
        <div className="showTime">
                {
                    props.times.isRepeat && props.times.repeatTime > 0 &&
                    <div className="repeatTime">
                        <p><span>{props.times.repeatTime}</span>
                        {` ${
                            repeat === "daily" ? 'day' :
                            repeat === "weekly" ?'week' : ''}`
                        }
                        { props.times.repeatTime > 1 ? "s":""}</p>
                    </div>
                }
                <div className="timeContainer">
                    {repeat === "weekly" && <ShowWeeklyTime times={props.times.time}/>}
                    {repeat === "daily" && <ShowDailyTime times={props.times.time}/>}
                </div>
        </div>
    );
}

export default ShowTime ;