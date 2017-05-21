import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './images/logo.svg'
import './App.css'

const StyledApp = styled.div`
    text-align: center;

    p {
        font-size: 16px;
    }
`
const Header = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;

    h2 {
        font-size: 20px;
        font-weight: 700;
    }
`

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Logo = styled.img`
    animation: ${spin} infinite 20s linear;
    height: 80px;
`

export default () => (
    <StyledApp>
        <Header>
            <Logo src={logo} alt='logo' />
            <h2>Welcome to Romak</h2>
        </Header>
    </StyledApp>
)
