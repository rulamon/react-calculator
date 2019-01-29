import React from 'react'


const Clear = (props) => {
    return(
        <button id="clear" value="CE" onClick={props.onClear} />
    )
}

const Operators = (props) => {

    return(
        <div>
        </div>
    )
}

const Numbers = (props) => {
    return(
        <div>
            
        </div>
    )
}

const Decimal = (props) => {
    return(
        <button id="decimal" value="." onClick={props.onDecimal} />
    )
}

const Equal = (props) => {
    return(
        <div>

        </div>
    )
}

export const Keys = (props) => {
    return(
        <div>
            <Clear onClear={props.onClear} />
            <Operators onOperator={props.onOperator} operators={props.operators} />
            <Numbers onNumber={props.onNumber} numbers={props.numbers} />
            <Decimal onDecimal={props.onDecimal} />
        </div>
    )
}