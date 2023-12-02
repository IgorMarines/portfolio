import styled from 'styled-components'


export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  color: #fff;
  background: #fff;
  min-height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
display: flex;
background: #fafafa;
width: 100%;
min-height: 100vh;
justify-content: space-around;
flex-direction: column;
color: #000;
`;

export const CardsContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
background: #fafafa;
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
border: solid 2px #565555;

width: 350px;
border-radius: 15px;
box-shadow: rgb(0, 0, 0, 0.4) 0px 20px 30px -10px;
padding: 30px;

a {
  display: flex;
  justify-content: center;
}

h2 {
  margin-top: 0.5em;
  text-align: center;
}

p {
  margin-top: 0.5em;
  width: 100%;
  font-weight: bold;
}

ul {
  list-style: none;
  margin-left: 0;
  li {
    font-size: 1em;
    color: white;
    line-height: 28px;
    background: #000;
    color: #fff;
    margin-top: 5px;
    border-radius: 5px;
    text-align: center;
    font-weight: bold;
    transition: 0.1s ease-in;

    &:hover {
      background: #fff;
      color: #000;
      border: 2px solid #000;
      transform: scale(1.05); /* Ajuste o valor conforme necessário para o zoom desejado */
    }
  }

@media (max-width: 760px) {
  width: 100%; /* Modifique conforme necessário para a versão responsiva */
}

`;


export const CardImage = styled.img`
  border-radius: 15px;
  width: 100%;
  border: 2px solid #000;
  padding-top: 16px;
  margin-bottom: 20px;
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.05); /* Ajuste o valor conforme necessário para o zoom desejado */
  }

`;

export const SlideText = styled.p`
color: white;
font-size: 18px;
text-align: center;
position: absolute;
bottom: 40px;
font-weight: 700;
background: #000;
`;

export const PortfolioText = styled.p`
  width: 90%;
  border: 2px solid #000;
  border-radius: 15px;
  padding: 1.5em;
  text-align: center;
  margin-bottom: 5px;
  font-weight: bold;
  box-shadow: rgb(0, 0, 0, 0.4) 0px 20px 30px -10px;
`

export const SlideDescription = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  position: absolute;
  bottom: 60px;
  font-weight: 700;
  background: #000;
`;
