import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh; 
    align-items: center;
`

export const Border = styled.div`
    border: 2px solid #000;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid #fff;
`

export const Left = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Right = styled.div`
    width: 30%;

    img {
        width: 390px;
        height: 390px;
    }
`

export const Name = styled.h1`
    color: #fff;
    font-size: 72px;
`

export const Role = styled.p`
    color: #fff;
    font-size: 48px;
    a {
        text-decoration: underline #fff;
        color: #fff;
    }
`

export const Description = styled.h2`
    color: #fcfcfc91;
    font-size: 30px;
`