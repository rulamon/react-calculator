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
            result: 0
        }
        this.onClick = this.onClick.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onEqual = this.onEqual.bind(this);
    }

    onClick(event){
        const targetValue = event.target.value;
        // result is 0
        if (this.state.result == 0) {
            // after clear
            if (this.state.formula == ""){
                // not zero or operator != - or .
                if (targetValue != 0||"+"||"/"||"*"||"."){
                    this.setState({
                        result: targetValue,
                        formula: this.state.formula + targetValue
                    })
                // .
                } else if (targetValue == ".") {
                    this.setState({
                        result: "0.",
                        formula: "0."
                    })
                }
            // during operation 
            } else if (!targetValue == 0) {
                if (numbersArray.includes(targetValue)){
                    this.setState({
                        result: targetValue,
                        formula: this.state.formula.slice(-1) + targetValue
                    })
                } else if (targetValue == ".") {
                    this.setState({
                        result: "0.",
                        formula: this.state.formula + "."
                    })
                }
            }
        // after onEqual
        } else if (this.state.formula.includes("=")) {
            // number != 0
            if(numbersArray.includes(targetValue) && targetValue != 0) {
                this.setState({
                    formula: targetValue,
                    result: targetValue
                })
                // number == 0
            } else if(targetValue == 0){
                this.onClear()
                // operator
            } else if (operatorsArray.includes(targetValue)){
                this.setState({
                    formula: this.state.result + targetValue,
                    result: targetValue
                })
                // .
            } else if (targetValue == ".") {
                this.setState({
                    formula: "0.",
                    result: "0."
                })
            }
        // normal operation 
            // result includes of == (.!!), operator
        } else if (!result.includes(".")) {
        }
    }
    
    onClear(){
        this.setState({
            formula: "",
            result: 0
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
    render(){
        return(
            <div>
                <Display 
                    formula={this.state.formula} 
                    result={this.state.result} 
                />
                <Keys 
                    onClick={this.state.onClick} 
                    onClear={this.state.onClear} 
                    onEqual={this.state.onEqual} 
                    numbers={this.state.numbers}
                    operators={this.state.operators}
                />
            </div>
        )
    }
}