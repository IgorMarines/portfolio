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
    max-width: 1280px;
    border-radius: 10px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5); /* Sombra para destaque */
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); /* Leve zoom ao passar o mouse */
    }
  }

  pre {
    font-size: 16px;
    line-height: 1.6;
    text-align: left;
    background: #111;
    padding: 15px;
    border-radius: 10px;
    color: #61dafb; /* Cor de destaque do texto */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5); /* Sombra para destaque */
    white-space: pre-wrap; /* Quebra de linha para evitar overflow horizontal */
  }
`

export const Main = styled.div`
  display: flex;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px;
  gap: 20px; /* Espaçamento entre elementos */

  a {
    margin-top: 25px;

    img {
      border-radius: 15px;
      border: 3px solid #fff;
      transition: transform 0.3s ease-in-out, border-color 0.3s ease;

      &:hover {
        transform: scale(1.1);
        border-color: #61dafb; /* Cor de destaque no hover */
      }
    }
  }

  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  flex-wrap: wrap;
  margin-top: 45px;
  align-items: center;
  background: #111;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);

  @media (max-width: 760px) {
    width: 100%;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #000;
    padding: 10px 15px;
    margin-top: 10px;
    width: 90%;
    height: auto;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); /* Sombra para efeito de elevação */

    &:hover {
      color: #fff;
      background: #000;
      border: 2px solid red;
    }

    @media (max-width: 760px) {
      width: 80%;
    }
  }
`
