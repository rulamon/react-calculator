import React from 'react'


const Clear = (props) => {
    return(
        <button id="clear" value="CE" onClick={props.onClear}>CE</button>
    )
}

const Operators = (props) => {
    const operatorButtons = props.operators.map((object, index) => <button value={Object.keys(object)[0]} id={Object.values(object)[0]} class="operator key" onClick={props.onOperator} key={`operator${index}`}>{Object.keys(object)[0]}</button>)
    return(
        <div>
            {operatorButtons}
        </div>
    )
}

const Numbers = (props) => {
    const numberButtons = props.numbers.map((object, index) => <button value={Object.keys(object)[0]} id={Object.values(object)[0]} class="number key" onClick={props.onNumber} key={`number${index}`}>{Object.keys(object)[0]}</button>)
    return(
        <div>
            {numberButtons}
        </div>
    )
}

const Decimal = (props) => {
    return(
        <button id="decimal" value="." class="key" onClick={props.onDecimal}>.</button>
    )
}

const Equal = (props) => {
    return(
        <div>
            <button id="equals" value="=" class="key" onClick={props.onEqual}>=</button>
        </div>
    )
}

export const Keys = (props) => {
    return(
        <div id="keys">
            <Clear onClear={props.onClear} />
            <Operators onOperator={props.onOperator} operators={props.operators} />
            <Numbers onNumber={props.onNumber} numbers={props.numbers} />
            <Decimal onDecimal={props.onDecimal} />
            <Equal onEqual={props.onEqual} />
        </div>
    )
}