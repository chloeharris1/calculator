import React from "react";
// Components
import Expression from "./Expression";
import Output from "./Output";
import Buttons from "./Buttons";

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentVal: '0',
            prevVal: '0',
            expresion: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleNumbers = this.handleNumbers.bind(this);
        this.handleOperators = this.handleOperators.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
        this.handleClear = this.handleClear.bind(this);

    };

    handleClick(key){
        switch(true){
            case /c/.test(key): this.handleClear();
            break;
            case /[0-9]/.test(key): this.handleNumbers(key);
            break;
            case /[+*/-]/.test(key): this.handleOperators(key);
            break; 
            case /=/.test(key): this.handleEquals();
            break;
            // Default case?
        }
    }

    handleNumbers(e){
        const value = e.target.value; 


    }

    handleOperators(){

    }

    handleEquals(){

    }

    handleClear() {
        this.setState({
            currentVal: 0, 
            equation: ''
        });
    }

    render(){
        return (
            <div className="calculator">
                <Expression
                expression={this.state.expression}/>
                <Output 
                currentValue={this.state.currentVal}/>
                <Buttons clear={this.handleClear}/>
            </div>
        );
    }

}

export default Calculator;