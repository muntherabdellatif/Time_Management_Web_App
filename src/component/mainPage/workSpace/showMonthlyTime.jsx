import React , {useState } from "react";
import { getDaysInMonth , firstMonthDay , splitTime , weekDaysShort } from "../../../common/timeCalculation";
import ShowDailyTime from "./showDailyTime"

function ShowMonthlyTime (props) {
    const [selectedDay,setSelectedDay] = useState(1);

    const dateObject = splitTime(props.times[0].startDate);
    const firstDayInWeek = firstMonthDay(dateObject.year,dateObject.monthNum) ;
    const emptyFieldArray = Array.from(Array(firstDayInWeek).keys());

    const numberOfDayInMonth = getDaysInMonth(dateObject.year,dateObject.monthNum+1);
    const monthArray = Array.from(Array(numberOfDayInMonth).keys());
    const emptyFieldAtEnd = Array.from(Array(35 - numberOfDayInMonth - firstDayInWeek).keys());

    let daysTime = [];

    const activeArray =[];

    props.times.forEach((time,index)=>{
        if (!activeArray.includes(splitTime(time.startDate).dayDate)) {
            activeArray.push(splitTime(time.startDate).dayDate);
        }
    });

    let pointer = 0 ;
    monthArray.forEach((day,index)=>{
        daysTime.push([]);
        if (activeArray.includes(index+1)) {
            while(props.times.length > pointer && splitTime(props.times[pointer].startDate).dayDate === index+1 ){
                daysTime[index].push(props.times[pointer]);
                pointer +=1;
            }
        }
    });

    console.log(daysTime,selectedDay,daysTime[selectedDay-1] );

    if (!activeArray.includes(selectedDay)){
        setSelectedDay(activeArray[0]);
    }

    const selectDay = (day)=> {
        setSelectedDay(day);
    }
    
    return (
        <div className="monthTimeContainer">
            <div className="monthDaysContainer">
                {
                    weekDaysShort.map((day)=>{
                        return (<div className="weekDays">{day}</div>);
                    })
                }
                {
                    emptyFieldArray.map(()=>{
                        return (<div className="empty"></div>)
                    })
                }
                {
                    monthArray.map((day,index)=>{
                        return (
                            <div 
                                className={
                                    `day ${activeArray.includes(index+1) && 'active'} ${(index+1 === selectedDay) && 'selected'}`}
                                onClick={()=>{selectDay(index + 1)}}
                            >
                                {index + 1}
                            </div>);
                    })
                }
                {
                    emptyFieldAtEnd.map(()=>{
                        return (<div className="empty"></div>)
                    })
                }
            </div>
            <ShowDailyTime times={daysTime[selectedDay-1]}/>
        </div>
    );
}

export default ShowMonthlyTime ;