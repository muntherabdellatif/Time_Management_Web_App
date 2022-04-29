import React , {useState, useEffect} from "react";
import DailyTimeUnit from "./dailyTimeUnit";
import DailyTimeUnitDetail from "./dailyTimeUnitDetail";
import { splitTime } from "../../../common/timeCalculation"

function ShowDailyTime (props) {
    let timesList = props.times;
    const [hoverIndex, setHover] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());
    const changeHover = (value)=>{
        setHover(value);
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(currentTime);
        }, 60000);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])

    return (
        <div className="showDailyTime">
            <div className="currentTime" 
                    style={{
                        left:`${(splitTime(currentTime).hour)*20 - 20}px`
                    }}>
                {splitTime(currentTime).hour}:{splitTime(currentTime).minute}
            </div>
            <div className="hoursBar">
                <div className="time-container">
                    {timesList.map((time,index)=>{
                        return (
                            <DailyTimeUnit
                                key={index}
                                id={index}
                                period={Math.abs(splitTime(time.endDate).hour -splitTime(time.startDate).hour)*20}
                                start={splitTime(time.startDate).hour*20}
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