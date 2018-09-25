import React from 'react';

import './filters.css';

function Filters(){
    return(
        <div className="Filters">
            <input className="Search" placeholder="Search"/>
            <select >
                <option>All States</option>
            </select>
            <select >
                <option>All Grades</option>
            </select>
            <select >
                <option>All Statuses</option>
                <option>Outline</option>
                <option>Build</option>
                <option>Published</option>
            </select>
        </div>
    );
}
export default Filters;