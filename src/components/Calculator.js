import React from "react";
// Components
import Formula from "./Formula";
import Output from "./Output";
import Buttons from "./Buttons";

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentVal: '0'
        }
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        this.setState = {
            currentVal: e.target.value
        }
    }

    render(){
        return (
            <div className="calculator">
                <Formula />
                <Output 
                currentValue={this.state.currentVal}/>
                <Buttons/>
            </div>
        );
    }

}

export default Calculator;