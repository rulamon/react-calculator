import React from 'react';
import { Display } from './display.js'
import { Keys } from './keys.js';
import { numberObjects, operatorObjects, numbersArray, operatorsArray } from '../utils/constants';

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numbers: numberObjects,
            operators: operatorObjects,
            formula: "",
            result: "0"
        };
        this.onClear = this.onClear.bind(this);
        this.onEqual = this.onEqual.bind(this);
        this.onDecimal = this.onDecimal.bind(this);
        this.onNumber = this.onNumber.bind(this);
        this.onOperator = this.onOperator.bind(this);
    }
    onClear(){
        this.setState({
            formula: "",
            result: 0
        })
    };

    onEqual(){
        if(!this.state.formula.includes("=")){    
            const newResult = Math.round(eval(this.state.formula) * 10E12) / 10E12
            this.setState({
                formula: this.state.formula + "=" + newResult,
                result: newResult
            })
        }
    }
    onNumber(event){
        const targetValue = event.target.value;
        if ((this.state.result == "0" && targetValue != "0") || operatorsArray.includes(this.state.result)) {
            this.setState({
                result: targetValue,
                formula: this.state.formula + targetValue
            })
        } else if (this.state.formula.includes("=")) {
            if(targetValue != 0){
                this.setState({
                    result: targetValue,
                    formula: "" + targetValue
                })
            } else {
                this.onClear();
            }
        } else if(this.state.result != "0"){
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
        const targetValue = event.target.value;
        if (this.state.formula == "") {
            if(targetValue == "-"){
                this.setState({
                    result: targetValue,
                    formula: targetValue
                })
            }
        } else if (this.state.formula.includes("=")){
            this.setState({
                result: targetValue,
                formula: this.state.result + targetValue
            })
        } else if (operatorsArray.includes(this.state.result)){
            this.setState({
                result: targetValue,
                formula: this.state.formula.substring(0, this.state.formula.length - 1) + targetValue
            })
        } else {
            this.setState({
                result: targetValue,
                formula: this.state.formula + targetValue
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
                    onNumber={this.onNumber} 
                    onDecimal={this.onDecimal} 
                    onOperator={this.onOperator} 
                    onClear={this.onClear} 
                    onEqual={this.onEqual} 
                    numbers={this.state.numbers}
                    operators={this.state.operators}
                />
            </div>
        )
    }
}