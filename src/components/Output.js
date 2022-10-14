import React from "react";


class Output extends React.Component{
    render(){
        const INVALID = 'Invalid Expression';
    
        const error = <div className="calc-error">{this.props.error}</div>;
        const result = <div className="calc-result">{this.props.result}</div>;
        return (
            <div>
                {this.props.error === INVALID 
                ? error : 
                result}
                </div>
        ); 
        
    }
}

export default Output; 