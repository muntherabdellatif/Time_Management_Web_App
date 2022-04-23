import React from "react";
import Daily from "./daily";
import Weekly from "./weekly";
import Monthly from "./monthly";
import Yearly from "./yearly";

function Agenda (props) {
    return (
        <div>
            {props.view === "daily" && <Daily/>}
            {props.view === "weekly" && <Weekly/>}
            {props.view === "monthly" && <Monthly/>}
            {props.view === "year_quarters" && <Yearly/>}
        </div>
    );
}

export default Agenda ;