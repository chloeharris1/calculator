import React from "react";
// Components
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

        let INVALID = 'Invalid Expression';

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

        // Dot operator is selected
        if(state.expression.length >= 1 && value === '.') {
            // If the last operator selected is the dot operator, do nothing
            if(prevInput === '.') {
                return {
                    ...state
                };
            }
            // Add dot operator to the previous input 
            return {
                ...state,
                expression: state.expression + '.',
                value
            };
        }

        // Clear "C" is selected 
        if(value === 'C') {
            return {
                ...state,
                expression: '',
                result: '',
                error: '',
                value: 0
            };
        }

        // DEL operator is selected
        if(value === 'DEL' && state.expression.length >= 1) {
            return {
                ...state,
                expression: state.expression.slice(0,-1),
                value
            };
        }


        // Math operator is selected 
        if(hasOperator(operators, value) && state.expression.length >= 1) {
            if(isNaN(prevInput)) {
                let exp = state.expression;
                return {
                    ...state,
                    expression: exp.substring(0, exp.length - 1) + value
                };
            }
            return {
                ...state,
                expression: state.expression + value,
                value
            };
        }

        // Equal operator is selected
        if(value === '=' && state.expression.length >= 1) {
            let result = '';
            let error = '';
            try {
                result = eval(state.expression)
            } catch (err) {
                error = INVALID;
                // setTimeout(() => this.setState({
                //     value: this.state.value
                // }), 1000);
            }
            return {
                ...state,
                result,
                error,
            };

        }
        return {
            ...state,
            value
        };


    }

    render(){
        return (
            <div className="calculator">
                <Display 
                value={this.state.value}
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