import React, {Component} from 'react'
import styled from 'styled-components'

const WrapperCalculator = styled.div`
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    background-color: red;
`

class Calculator extends Component {
    render() {
        return (
            <div>
                <WrapperCalculator>

                </WrapperCalculator>
            </div>
        )
    }
}

export default Calculator