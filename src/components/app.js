import React from 'react';
import { Display } from 'display.js'
import { Keys } from 'keys.js'

const numberObjects = [{0: "zero"}, {1: "one"}, {2: "two"}, {3: "three"}, {4: "four"}, {5: "five"}, {6: "six"}, {7: "seven"}, {8: "eight"}, {9: "nine"}];
const operatorObjects = [{"+": "add"}, {"-":"subtract"}, {"*":"multiply"}, {"/":"divide"}];
const numbersArray = numberObjects.map(object => Object.keys(object)[0]);
const operatorsArray = operatorObjects.map(object => Object.keys(object)[0]);

export class App extends React.component {
    constructor(props){
        super(props);
        this.state = {
            numbers: numberObjects,
            operators: operatorObjects,
            formula: "",
            result: "0"
        }
        this.onClear = this.onClear.bind(this);
        this.onEqual = this.onEqual.bind(this);
        this.onDecimal = this.onDecimal.bind(this);
        this.onNumber = this.onNumber.bind(this);
        this.onOperator = this.onOperator.bind(this);
    }
    onClear(){
        this.setState({
            formula: "",
            result: "0"
        })
    }

    onEqual(){
        if(!this.state.formula.includes("="))    
            const newResult = eval(this.state.formula)
            this.setState({
                formula: this.state.formula + "=" + newResult,
                result: newResult
            })
    }

    onNumber(event){
        const eventTarget = event.target.value;
        if ((this.state.result == "0" && eventTarget != "0") || operatorsArray.includes(this.state.result)) {
            this.setState({
                result: eventTarget,
                formula: this.state.formula + eventTarget
            })
        } else if (this.state.formula.includes("=")) {
            this.setState({
                result: eventTarget,
                formula: "" + eventTarget
            })
        } else if(numbersArray.includes(this.state.result) && this.state.result != 0){
            this.setState({
                result: this.state.result + targetValue,
                formula: this.state.formula + targetValue
            })
        }
    }

    onDecimal(){
        if ((this.state.result == "0" && this.state.formula == "") || (this.state.formula.includes("="))){
            this.setState({
                result: "0.",
                formula: "0."
            })
        } else if (operatorsArray.includes(this.state.result)){
            this.setState({
                result: "0.",
                formula: this.state.formula + "0."
            })
        } else if (!this.state.result.includes(".")){
            this.setState({
                result: this.state.result + ".",
                formula: this.state.formula + "."
            })
        }
    }

    onOperator(event){
        const eventTarget = event.target.value;
        if (currentFormula == "" && eventTarget !== ("+"||"*"||"/")){
            this.setState({
                result: eventTarget,
                formula: eventTarget
            })
        } else if (operatorsArray.includes(this.state.result)){
            this.setState({
                result: eventTarget,
                formula: this.state.formula.substring(0, this.state.formula.length - 1) + eventTarget
            })
        } else if (this.state.formula.includes("=")){
            this.setState({
                result: eventTarget,
                formula: this.state.result + eventTarget
            })
        } else {
            this.setState({
                result: eventTarget,
                formula: this.state.formula + eventTarget
            })
        }
        
    }

    render(){
        return(
            <div>
                <Display 
                    formula={this.state.formula} 
                    result={this.state.result} 
                />
                <Keys 
                    onNumber={this.state.onNumber} 
                    onDecimal={this.state.onDecimal} 
                    onOperator={this.state.onOperator} 
                    onClear={this.state.onClear} 
                    onEqual={this.state.onEqual} 
                    numbers={this.state.numbers}
                    operators={this.state.operators}
                />
            </div>
        )
    }
}