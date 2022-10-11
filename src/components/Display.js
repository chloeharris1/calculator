import React from "react";

import Expression from "./Expression";

const INVALID = 'Invalid Expression';

class Display extends React.Component {
    render() {
        return(
            <div id="display" className="calcDisplay">
                <Expression 
                expression={this.props.expression}/>
                {this.props.error === INVALID ? 
                <div className="calc-error">{this.props.error}</div> :
                <div className="calc-result">{this.props.result}</div>
            }
            </div>
        );
    }
}

export default Display;