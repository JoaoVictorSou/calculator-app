import React from "react";
import styled, {ThemeProvider} from "styled-components";

const WrapperButton = styled.button`
        grid-column: span ${props => props.theme.gridCol};
        font-size: 1.4em;
        width: 100%;
        height: 50px;
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
        border: none;
        border-right: solid 1px #888;
        border-bottom: solid 1px #888;
        
        :active {
            background-color: ${props => props.theme.backgroundColorActive};
        }
`

const Button = (props) => {
    const theme = {
        backgroundColor: props.operation ? '#fa8231' : '#f0f0f0', 
        backgroundColorActive: props.operation ? '#fa8231cc' : '#ccc', 
        color: props.operation ? '#FFF' : '#000', 
        gridCol: props.double || props.triple ? (props.double ? 2 : 3) : 1
    }

    return(
        <ThemeProvider theme={theme}>
            <WrapperButton
            onClick={e => props.click && props.click(props.label)}
            className={props.operation ? 'operation' : ''}>
                {props.label}
            </WrapperButton>
        </ThemeProvider>
    )
}

export default Button