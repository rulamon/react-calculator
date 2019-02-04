import React from 'react'

export const Display = (props) => {
    return(
        <div id="screen">
            <div id="formula" className="display-component">
                {props.formula}
            </div>            
            <div id="display" className="display-component">
                {props.result}
            </div>
        </div>
    )
}