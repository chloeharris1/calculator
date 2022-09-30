import React from "react";
// Components
import Equation from "./Equation";
import Output from "./Output";
import Buttons from "./Buttons";

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentVal: '0'
        }
    };

    render(){
        return (
            <div className="calculator">
                <Equation />
                <Output 
                currentValue={this.state.currentVal}/>
                <Buttons/>
            </div>
        );
    }

}

export default Calculator;