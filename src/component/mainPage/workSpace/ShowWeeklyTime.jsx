import React , {useState , useLayoutEffect} from "react";
import { splitTime } from "../../../common/timeCalculation";
import DaysBarUnit from "./daysBarUnit";
import ShowDailyTime from "./showDailyTime"

function ShowWeeklyTime (props) {
    let times = props.times ;
    const [selectedDay,setSelectedDay] = useState('Sun');
    const weekDays = ['Sun', 'Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat'];
    let days = times.map((day)=> splitTime(day.startDate).weekDay.substring(0, 3));
    if (!days.includes(selectedDay)) {
        setSelectedDay(days[0]);
    }
    let daysTime = {
        Sun : [] ,
        Mon : [] ,
        Tue : [] ,
        Wed : [] ,
        Thu : [] ,
        Fri : [] ,
        Sat : [] ,
    }
    times.forEach((time)=>{
        daysTime[`${splitTime(time.startDate).weekDay.substring(0, 3)}`].push(time);
        return("");
    });

    const select =(day)=>{
        setSelectedDay(day)
    }

    return (
        <>
            <div className="daysBar">
                {weekDays.map((day,index)=>{
                    return (
                        <DaysBarUnit 
                        day={day}
                        key={index}
                        active={days.includes(day)}
                        selectedDay={day === selectedDay} 
                        select={select}/>
                    )
                })}
            </div>
            <div className="block">
                <ShowDailyTime times={daysTime[selectedDay]}/>
            </div>
        </>
    );
}

export default ShowWeeklyTime ;