import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: #000;
    min-height: 100vh;
    padding-top: 15px;
    color: #fff;
    text-align: center;

    img {
        width: 80%;
        border-radius: 5px;
    }

    pre {
        font-size: 16px;
        line-height: 36px;
        
    }
`

export const Main = styled.div`
    display: flex;
    min-height: 100vh;
    
    a{
        margin-top: 25px;

        img {
            border-radius: 15px;
            border: 3px solid #fff;
        }
        
    }

    @media (max-width: 760px) {
        flex-direction: column;
        width: 100%; /* Modifique conforme necessário para a versão responsiva */
      }
`


export const Techs = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    flex-wrap: wrap;
    margin-top: 45px;
    align-items: center;

    @media (max-width: 760px) {
        width: 100%; 

    }

    p {

        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 760px) {
            display: flex;
            justify-content: center;
            width: 80%;
        }

        background: #fff;
        color: #000;
        padding: 5px;
        margin-top: 5px;
        width: 90%;
        height: 50px;
        border-radius: 5px;

        &:hover {
            color: #fff;
            background: #000;
            border: 2px solid #fff;
        }
    }
`

