import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown ,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

function ListTitle (props) {
    return (
        <h2 className="list-title">
            {props.isOpen ?
            <FontAwesomeIcon icon={faCircleChevronDown} className="icon" onClick={props.toggle}/> :
            <FontAwesomeIcon icon={faCircleChevronRight} className="icon" onClick={props.toggle}/>}
            <span className="text">{props.title}</span>
        </h2>
    );
}

export default ListTitle ;