import React from 'react';

function Square(props) {
        return (
            <button className="square"
             onClick={props.onClick} data-active={props.position}>
            {props.value}
            </button>
        );
}

export default Square;