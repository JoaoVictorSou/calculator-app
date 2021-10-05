import React from 'react'
import styled from 'styled-components'

const WrapperDisplay = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-column: span 4;
    padding: 20px;
    font-size: 1.55em;
    background-color: #0004;
`

const Display = props => {
    return(
        <WrapperDisplay>
            {props.value}
        </WrapperDisplay>
    )
}

export default Display