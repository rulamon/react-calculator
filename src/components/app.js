import React from 'react';
import { Display } from 'display.js'
import { Keys } from 'keys.js'

const numbers = [{0: "zero"}, {1: "one"}, {2: "two"}, {3: "three"}, {4: "four"}, {5: "five"}, {6: "six"}, {7: "seven"}, {8: "eight"}, {9: "nine"}]
const operators = [{"+": "add"}, {"-":"subtract"}, {"*":"multiply"}, {"/":"divide"}]

export class App extends React.component {
    constructor(props){
        super(props);
        this.state = {
            numbers: numbers,
            operators: operators,
            formula: 0,
            result: 0
        }
        this.onClick = this.onClick.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onEqual = this.onEqual.bind(this);
    }

    onClick(event){
        const targetValue = event.target.value;
        if((this.state.formula == "" && targetValue != 0||"."||"+"||"/"||"*") || (this.state.result == 0 && targetValue != 0) || this.state.result != 0){
            this.setState({
                result:  typeof targetValue == number || targetValue == "." ? this.state.result + targetValue : targetValue,
                formula: this.state.formula + targetValue
            })
        }
    }
    
    onClear(){
        this.setState({
            formula:"",
            result: 0
        })
    }

    onEqual(){
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