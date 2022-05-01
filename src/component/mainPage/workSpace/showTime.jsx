import React , {useState , useEffect} from "react";
import ShowDailyTime from "./showDailyTime";
import ShowWeeklyTime from "./ShowWeeklyTime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft ,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { makeDaysArray , makeWeeksArray } from "../../../common/timeCalculation";

function ShowTime (props) {
    const [showDay, setShowDay] = useState(0);
    const [showWeek, setShowWeek] = useState(0);

    let allDailyTimes = makeDaysArray(props.times.time);
    let allWeeklyTimes = makeWeeksArray(props.times.time);

    if (allDailyTimes.length -1 < showDay) {
        setShowDay(0);
    }
    if (allWeeklyTimes.length -1 < showWeek) {
        setShowWeek(0);
    }
    
    let showDailyTime = allDailyTimes[showDay];
    let showWeeklyTime = allWeeklyTimes[showWeek];
    let repeat = props.times.repeat;
    let repeatTime = 0;

    if (repeat === "daily") {
        repeatTime = allDailyTimes.length;
    }else if (repeat === "weekly") {
        repeatTime = allWeeklyTimes.length;
    }

    const increaseShowTime = ()=> {
        if (repeat === "daily") {
            let maxNub = allDailyTimes.length;
            if (showDay < maxNub - 1) {setShowDay(showDay + 1);}
        }else if  (repeat === "weekly") {
            let maxNub = allWeeklyTimes.length;
            if (showWeek < maxNub - 1) {setShowWeek(showWeek + 1);}
        }
    }

    const decreaseShowTime = () =>{
        if (repeat === "daily") {
            if (showDay > 0) {setShowDay(showDay - 1);} 
        } else if (repeat === "weekly") {
            if (showWeek > 0) {setShowWeek(showWeek - 1);} 
        }
    }

    return (
        <div className="showTime">
                {
                    props.times.isRepeat && 
                    <div className="repeatTime">
                        <p><span>{repeatTime}</span>
                        {` ${
                            repeat === "daily" ? 'day' :
                            repeat === "weekly" ?'week' : ''}`
                        }
                        { repeatTime > 1 ? "s":""}</p>
                        <div className="showController">
                            <FontAwesomeIcon icon={faCircleChevronLeft} className="icon" title="next" onClick={decreaseShowTime}/>
                            <p className="current">
                                {
                                    repeat === "daily" ? showDay + 1 :
                                    repeat === "weekly" ? showWeek + 1 : ""
                                }
                            </p>
                            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" title="previous" onClick={increaseShowTime}/>
                        </div>
                    </div>
                }
                <div className="timeContainer">
                    {repeat === "weekly" && <ShowWeeklyTime times={showWeeklyTime}/>}
                    {repeat === "daily" && <ShowDailyTime times={showDailyTime}/>}
                </div>
        </div>
    );
}

export default ShowTime ;