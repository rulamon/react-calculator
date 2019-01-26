import React from 'react';
import { Display } from 'display.js'
import { Keys } from 'keys.js'

const numbers = [{0: "zero"}, {1: "one"}, {2: "two"}, {3: "three"}, {4: "four"}, {5: "five"}, {6: "six"}, {7: "seven"}, {8: "eight"}, {9: "nine"}]
const operators = [{"+": "add"}, {"-":"subtract"}, {"*":"multiply"}, {"/":"divide"}]

export class App extends React.component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Display />
                <Keys />
            </div>
        )
    }
}