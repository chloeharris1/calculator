import React from "react";

import Expression from "./Expression";
import Output from "./Output";


class Display extends React.Component {
    render() {
        return(
            <div id="display" className="calcDisplay">
                <Expression 
                expression={this.props.expression}/>
                <Output 
                value={this.props.value}
                result={this.props.result}
                error={this.props.error}/>
            </div>
        );
    }
}

export default Display;