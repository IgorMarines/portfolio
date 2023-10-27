import styled from 'styled-components'

export const Container = styled.div`
    background: #000;
    min-height: 100vh;
    color: #fff;
    text-align: center;
    width: 100%;

    img {
        width: 100%;
    }

    pre {
        font-size: 24px;
        line-height: 36px;
        
    }
`

export const Techs = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    p {
        background: #fff;
        color: #000;
        padding: 5px;
        margin: 5px;
        width: 50%;
    }

`