import React , {useState , useEffect} from "react";
import ShowDailyTime from "./showDailyTime";
import ShowWeeklyTime from "./ShowWeeklyTime";
import ShowMonthlyTime from "./showMonthlyTime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft ,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { makeDaysArray , makeWeeksArray , makeMonthsArray} from "../../../common/timeCalculation";

function ShowTime (props) {
    const [showDay, setShowDay] = useState(0);
    const [showWeek, setShowWeek] = useState(0);
    const [showMonth, setShowMonth] = useState(0);

    let allDayTimes = makeDaysArray(props.times.time);
    let allWeekTimes = makeWeeksArray(props.times.time);
    let allMonthTimes = makeMonthsArray(props.times.time);

    if (allDayTimes.length -1 < showDay) {
        setShowDay(0);
    }

    if (allWeekTimes.length -1 < showWeek) {
        setShowWeek(0);
    }

    if (allMonthTimes.length -1 < showMonth) {
        setShowMonth(0);
    }
    
    let showDailyTime = allDayTimes[showDay];
    let showWeeklyTime = allWeekTimes[showWeek];
    let showMonthlyTime = allMonthTimes[showMonth];

    let repeat = props.times.repeat;
    let repeatTime = 0;

    if (repeat === "daily") {
        repeatTime = allDayTimes.length;
    }else if (repeat === "weekly") {
        repeatTime = allWeekTimes.length;
    }else if (repeat === "monthly") {
        repeatTime = allMonthTimes.length;
    }

    const increaseShowTime = ()=> {
        if (repeat === "daily") {
            let maxNub = allDayTimes.length;
            if (showDay < maxNub - 1) {setShowDay(showDay + 1);}
        }else if (repeat === "weekly") {
            let maxNub = allWeekTimes.length;
            if (showWeek < maxNub - 1) {setShowWeek(showWeek + 1);}
        }else if (repeat === "monthly") {
            let maxNub = allMonthTimes.length;
            if (showMonth < maxNub - 1) {setShowMonth(showMonth + 1);}
        }
    }

    const decreaseShowTime = () =>{
        if (repeat === "daily") {
            if (showDay > 0) {setShowDay(showDay - 1);} 
        } else if (repeat === "weekly") {
            if (showWeek > 0) {setShowWeek(showWeek - 1);} 
        } else if (repeat === "monthly") {
            if (showMonth > 0) {setShowMonth(showMonth - 1);} 
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
                        repeat === "weekly" ?'week' : 
                        repeat === "monthly" ? "month" : ""}`
                    }
                    { repeatTime > 1 ? "s":""}</p>
                    <div className="showController">
                        <FontAwesomeIcon icon={faCircleChevronLeft} className="icon" title="next" onClick={decreaseShowTime}/>
                        <p className="current">
                            {
                                repeat === "daily" ? showDay + 1 :
                                repeat === "weekly" ? showWeek + 1 :
                                repeat === "monthly" ? showMonth + 1 : ""
                            }
                        </p>
                        <FontAwesomeIcon icon={faCircleChevronRight} className="icon" title="previous" onClick={increaseShowTime}/>
                    </div>
                </div>
            }
            <div className="timeContainer">
                {repeat === "daily" && <ShowDailyTime times={showDailyTime}/>}
                {repeat === "weekly" && <ShowWeeklyTime times={showWeeklyTime}/>}
                {repeat === "monthly" && <ShowMonthlyTime times={showMonthlyTime}/>}
            </div>
        </div>
    );
}

export default ShowTime ;