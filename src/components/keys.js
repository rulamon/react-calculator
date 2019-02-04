import React from 'react'

export const Keys = (props) => {
    const operatorButtons = props.operators.map(
        (object, index) => 
            <button 
            value={Object.keys(object)[0]} 
            id={Object.values(object)[0]} 
            className="operator key" 
            onClick={props.onOperator} 
            key={`operator${index}`}>
                {
                    Object.keys(object)[0] == "*" ? String.fromCharCode(215) : Object.keys(object)[0] == "/" ? String.fromCharCode(247) : Object.keys(object)[0]
                }
            </button>
    )
    const numberButtons = props.numbers.map(
        (object, index) => 
            <button 
            value={Object.keys(object)[0]} 
            id={Object.values(object)[0]} 
            className="number key" 
            onClick={props.onNumber} 
            key={`number${index}`}>
                {Object.keys(object)[0]}
            </button>
    )
    return(
        <div id="keys">
            <button id="clear" value="CE" className="key special" onClick={props.onClear}>CE</button>
            {operatorButtons}
            {numberButtons}
            <button id="decimal" value="." className="key" onClick={props.onDecimal}>.</button>
            <button id="equals" value="=" className="key special" onClick={props.onEqual}>=</button>
        </div>
    )
}