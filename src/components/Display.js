import React from "react";

import Expression from "./Expression";

class Display extends React.Component {
    render() {
        return(
            <div id="display" className="outputDisplay">
                <Expression />
                {this.props.currentValue}
                </div>
        );
    }
}

export default Display;