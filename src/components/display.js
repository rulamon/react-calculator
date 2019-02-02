import React from 'react'

const Formula = (props) => {
    return(
        <div>
            {props.formula}
        </div>
    )
}
const Result = (props) => {
    return(
        <div id="display">
            {props.result}
        </div>
    )
}
export const Display = (props) => {
    return(
        <div>
            <Formula formula={props.formula} />
            <Result result={props.result} />
        </div>
    )
}