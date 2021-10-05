import React, {Component} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import RobotoMono from '../fonts/RobotoMono-Thin.ttf'

import Button from '../components/Button'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'RobotoMono';
        src: url(${RobotoMono});
    }

    * {
        font-family: 'RobotoMono', monospace;
    }

    body {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #f2f2f2;
        background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
    }
`

const WrapperCalculator = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 50px 50px 50px 50px 50px;
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
                <GlobalStyle />
                <WrapperCalculator>
                    <Button label='AC' />
                    <Button label='/' />
                    <Button label='7' />
                    <Button label='8' />
                    <Button label='9' />
                    <Button label='*' />
                    <Button label='4' />
                    <Button label='5' />
                    <Button label='6' />
                    <Button label='-' />
                    <Button label='1' />
                    <Button label='2' />
                    <Button label='3' />
                    <Button label='+' />
                    <Button label='0' />
                    <Button label='.' />
                    <Button label='=' />
                    
                </WrapperCalculator>
            </div>
        )
    }
}

export default Calculator