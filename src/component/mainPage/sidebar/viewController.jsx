import React from "react";

function ViewController (props) {
    return (
        <div className="view-controller">
            <label htmlFor="pet-select">Show Style</label>
            <select name="pets" className="pet-select" id="pet-select" onChange={props.changeView}>
                <option value="daily">daily</option>
                <option value="weekly">weekly</option>
                <option value="monthly">monthly</option>
                <option value="year_quarters">year quarters</option>
            </select>
        </div>
    );
}

export default ViewController ;