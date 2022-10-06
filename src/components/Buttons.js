import React from "react";


const buttons = [
    { id: 'clear', value: 'C'},
    { id: 'divide', value: '/'},
    { id: 'seven', value: '7'},
    { id: 'eight', value: '8'},
    { id: 'nine', value: '9'},
    { id: 'multiply', value: '*'},
    { id: 'four', value: '4'},
    { id: 'five', value: '5'},
    { id: 'six', value: '6'},
    { id: 'minus', value: '-'},
    { id: 'one', value: '1'},
    { id: 'two', value: '2'},
    { id: 'three', value: '3'},
    { id: 'plus', value: '+'},
    { id: 'zero', value: '0'},
    { id: 'decimal', value: '.'},
    { id: 'equals', value: '='}
];





class Buttons extends React.Component {
    render(){
        let calcPad = buttons.map(button => {
            return (
                <button 
                id={button.id} 
                value={button.value} 
                key={button.value}
                onClick={this.props.handleNumbers}>{button.value}</button>
            );
        });
        return (
        <div>
            {calcPad}
        </div>
            )
    }
}

export default Buttons;