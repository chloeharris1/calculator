import React from "react";
import Output from "./Output";

class Calculator extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="calculator">
                <Formula />
                <Output />
                <Buttons />
            </div>
        );
    }

}

export default Calculator;