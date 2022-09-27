import React from "react";
// Components
import Formula from "./Formula";
import Output from "./Output";
import Buttons from "./Buttons";

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