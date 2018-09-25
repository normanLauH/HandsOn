import React from 'react'

function Select(props){

    if(props.position === "left"){
        return(
            <select className="SelectLeft">
                <option>Editorial</option>
            </select>
        );  
    }else{
        return(
            <select className="SelectRight">
                <option>Melissa</option>
            </select>
        );  
    }    
}
export default Select;