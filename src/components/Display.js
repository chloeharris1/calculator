import React from "react";

class Display extends React.Component {
    render() {
        return(
            <div id="display" className="outputDisplay" >
                {this.props.currentValue}</div>
        );
    }
}

export default Display;