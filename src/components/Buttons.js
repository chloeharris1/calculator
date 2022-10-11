import React from "react";


const buttons = [
    {id: 'delete', value: 'DEL'},
    { id: 'clear', value: 'C'},
    { id: 'seven', value: '7'},
    { id: 'eight', value: '8'},
    { id: 'nine', value: '9'},
    { id: 'divide', value: '/'},
    { id: 'four', value: '4'},
    { id: 'five', value: '5'},
    { id: 'six', value: '6'},
    { id: 'multiply', value: '*'},
    { id: 'one', value: '1'},
    { id: 'two', value: '2'},
    { id: 'three', value: '3'},
    { id: 'subtract', value: '-'},
    { id: 'zero', value: '0'},
    { id: 'decimal', value: '.'},
    { id: 'equals', value: '='},
    { id: 'add', value: '+'}
];





class Buttons extends React.Component {
    constructor(props) {
        super(props);
    };
    
    render(){
        let calcPad = buttons.map(button => {
            return (
                <button 
                id={button.id} 
                value={button.value} 
                key={button.value}
                onClick={()=>this.props.handleClick(button.value)}>{button.value}</button>
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