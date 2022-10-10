import React from "react";

class Expression extends React.Component {

    render(){
        return (
            <div className="expressionDisplay">
                {this.props.expression}</div>
        );
    }
}

export default Expression;