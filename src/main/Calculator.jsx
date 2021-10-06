import React, {Component} from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import RobotoMono from '../fonts/RobotoMono-Thin.ttf'

import Display from '../components/Display'
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
    grid-template-rows: 1fr 50px 50px 50px 50px 50px;
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
`

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: Array(2).fill(0),
    current: 0
}

class Calculator extends Component {
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)

        this.state = {...initialState}
    }

    clearMemory() {
        this.setState({...initialState})
    }
    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {
        return (
            <div>
                <GlobalStyle />
                <WrapperCalculator>
                    <Display value={this.state.displayValue} />
                    <Button label='AC' click={this.clearMemory} triple/>
                    <Button label='/' click={this.setOperation} operation />
                    <Button label='7' click={this.addDigit} />
                    <Button label='8' click={this.addDigit} />
                    <Button label='9' click={this.addDigit} />
                    <Button label='*' click={this.setOperation} operation />
                    <Button label='4' click={this.addDigit} />
                    <Button label='5' click={this.addDigit} />
                    <Button label='6' click={this.addDigit} />
                    <Button label='-' click={this.setOperation} operation />
                    <Button label='1' click={this.addDigit} />
                    <Button label='2' click={this.addDigit} />
                    <Button label='3' click={this.addDigit} />
                    <Button label='+' click={this.setOperation} operation />
                    <Button label='0' click={this.addDigit} double />
                    <Button label='.' />
                    <Button label='=' click={this.setOperation} operation />
                    
                </WrapperCalculator>
            </div>
        )
    }
}

export default Calculator