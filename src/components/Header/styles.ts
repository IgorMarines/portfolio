import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Para garantir alinhamento vertical */
  width: 100%;
  padding: 1.5em 2.5em; /* Substituí margem por padding para controle de espaço interno */
  background-color: #000; /* Adicionei um fundo para maior contraste */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const LinkPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
`;

export const Link_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-size: 2em;
  font-weight: 800;
  gap: 15px; /* Adicionei espaçamento entre os elementos */

  img {
    width: 30px;
    height: 30px;
    transition: all 0.3s ease; /* Transição suave em hover */

    &:hover {
      animation: ${LinkPulse} 1.5s ease-in-out infinite;
      width: 35px;
      height: 35px;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      color: #61dafb; /* Cor de destaque ao passar o mouse */
    }
  }
`;
