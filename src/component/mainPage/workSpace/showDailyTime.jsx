import React , {useState} from "react";
import DailyTimeUnit from "./dailyTimeUnit"
import DailyTimeUnitDetail from "./dailyTimeUnitDetail"

function ShowDailyTime (props) {
    let timesList = props.times;
    const [hoverIndex, setHover] = useState("");

    const changeHover = (value)=>{
        setHover(value);
    }
    return (
        <div className="showDailyTime">
            <div className="hoursBar">
                <div className="time-container">
                    {timesList.map((time,index)=>{
                        return (
                            <DailyTimeUnit
                                key={index}
                                id={index}
                                period={Math.abs(time.endHour -time.startHour)*20}
                                start={time.startHour*20}
                                hover={hoverIndex}
                                />
                        )
                    })}
                </div>
            </div>
            <div className="detail-container">
                {timesList.map((time,index)=>{
                    return (
                        <DailyTimeUnitDetail 
                            key={index}
                            id={index}
                            time={time}
                            setHoverIndex={changeHover}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default ShowDailyTime ;