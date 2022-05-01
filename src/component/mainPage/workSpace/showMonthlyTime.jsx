import React , {useState } from "react";
import { getDaysInMonth , firstMonthDay , splitTime , weekDaysShort } from "../../../common/timeCalculation";

function ShowMonthlyTime (props) {
    const dateObject = splitTime(props.times[0].startDate);
    const firstDayInWeek = firstMonthDay(dateObject.year,dateObject.monthNum) ;
    const emptyFieldArray = Array.from(Array(firstDayInWeek).keys());

    const numberOfDayInMonth = getDaysInMonth(dateObject.year,dateObject.monthNum+1);
    const monthArray = Array.from(Array(numberOfDayInMonth).keys());

    const emptyFieldAtEnd = Array.from(Array(35 - numberOfDayInMonth - firstDayInWeek).keys());
    console.log({dateObject,firstDayInWeek,numberOfDayInMonth});
    return (
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
                    return (<div className="day">{index + 1}</div>);
                })
            }
            {
                emptyFieldAtEnd.map(()=>{
                    return (<div className="empty"></div>)
                })
            }
        </div>
    );
}

export default ShowMonthlyTime ;