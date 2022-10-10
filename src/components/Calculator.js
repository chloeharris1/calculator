import React from "react";
// Components
// import Expression from "./Expression";
import Display from "./Display";
import Buttons from "./Buttons";




class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 0,
            expression: '',
            result: '',
            error: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.calculateInput = this.calculateInput.bind(this);
    };

    
    handleClick(value){
        this.setState(() => {
            return this.calculateInput(this.state, value);
            
        });
        console.log(value)
    }
    
    calculateInput(state, value){
        const operators = ['+', "/", "-", "*"];
        const hasOperator = (arr, operator) => arr.indexOf(operator) !== -1; 

        let expArr = state.expression.split("");
        let prevInput = expArr[expArr.length-1];

        // The value a number, return the number 
        if(!isNaN(value)) {
            console.log(value)
            return {
                ...state,
                expression: state.expression + value, 
                value
            };
        }



       
    }

    render(){
        return (
            <div className="calculator">
                <Display 
                currentValue={this.state.value}
                expression={this.state.expression}
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