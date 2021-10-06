import React from "react";
import styled from "styled-components";

const WrapperButton = styled.div`
        
        button {
            font-size: 1.4em;
            width: 100%;
            height: 50px;
            background-color: #f0f0f0;
            border: none;
            border-right: solid 1px #888;
            border-bottom: solid 1px #888;
        }
        
        button:active {
            background-color: #ccc;
        }

        button.double {
            grid-column: span 2;
        }

        button.triple {
            grid-column: span 3;
        }

        .button.operation {
            background-color: #fa8231;
            color: #FFF;
        }

        .button.operation:active {
            background-color: #fa8231cc;
        }
`

const Button = (props) => {
    let classes = 'button '

    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return(
            <WrapperButton>
                <button 
                onClick={e => props.click && props.click(props.label)}
                className={classes}>
                    {props.label}
                </button>
            </WrapperButton>
    )
}

export default Button