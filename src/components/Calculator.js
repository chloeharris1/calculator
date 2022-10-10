import React from "react";
// Components
import Expression from "./Expression";
import Display from "./Display";
import Buttons from "./Buttons";




class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            expresion: '',
            result: '',
            error: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.calculateInput = this.calculateInput.bind(this);
    };

    handleClick(value){
        this.setState(() => {
            return calculateInput(this.state, value);
        });
    }

    calculateInput(state, value){
        let eqArr = state.equation.split('');
        let prevInput = eqArr[eqArr.length-1];
        console.log(prevInput);
       
    }

    render(){
        return (
            <div className="calculator">
                <Expression
                expression={this.state.expression}/>
                <Display 
                currentValue={this.state.value}
                result={this.state.result}
                error={this.state.error}
                />
                <Buttons 
                handleClick={this.handleClick}/>
            </div>
        );
    }

}

export default Calculator;