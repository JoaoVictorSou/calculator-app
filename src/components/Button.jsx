import React from "react";
import styled from "styled-components";

const WrapperButton = styled.button`
        font-size: 1.4em;
        height: 50px;
        background-color: #f0f0f0;
        border: none;
        border-right: solid 1px #888;
        border-bottom: solid 1px #888;
`

const Button = (props) => {
    return(
            <WrapperButton>
                {props.label}
            </WrapperButton>
    )
}

export default Button