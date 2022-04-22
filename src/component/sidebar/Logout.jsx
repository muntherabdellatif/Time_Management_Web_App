import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function logout (props) {
    return (
        <div className="logout">
            <h1 className="user-name">
                <FontAwesomeIcon icon={faUser}/> {props.name}
            </h1>
        </div>
    );
}

export default logout ;