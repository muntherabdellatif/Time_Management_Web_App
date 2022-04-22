import React , { useEffect , useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
function ProgressBar (props) {
    let stars = ["empty" , "empty" , "empty" , "empty" ,  "empty"];
    if (props.percent) {
        let full = Math.floor(props.percent / 20);
        let half = (props.percent / 20) - full > 0.25 ? 1 : 0;
        for (let i = 0 ; i < stars.length ; i++) {
            if (full > 0) {full--; stars[i]="full";}
            else if (half > 0) {half--; stars[i]="half";}
            else {stars[i]="empty";};
        };
    } 

    return (
        <div className={props.percent ? "progress_bar_container" : ""}>
            {props.percent && <p>Progress :</p>}
            {
            props.percent ? 
            props.percent===100 ? 
            <span className="done">Done <FontAwesomeIcon icon={solid.faFaceGrinStars} className="face"/>  </span>  
            :
            <span className="progress_bar">
                <span className="percent">{ props.percent } % </span>
                <span className="stars">
                    {stars.map((star,index)=>{
                        return (
                            star === "full" ? <FontAwesomeIcon key={index} icon={solid.faStar} className="star"/> :
                            star === "half" ? <FontAwesomeIcon key={index} icon={solid.faStarHalfAlt} className="star"/> :
                            star === "empty" ? <FontAwesomeIcon key={index} icon={regular.faStar} className="star"/> : ""
                        )
                    })}
                </span>
            </span> :
            ""
            }
        </div>
    );
}

export default ProgressBar ;