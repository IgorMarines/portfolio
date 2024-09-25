import styled from 'styled-components';
import Home_Icon from '../../../assets/images/icons/home.svg';

// Estilizando o container do link
const HomeLink = styled.a`
  font-weight: 800;
  color: #fff;
  font-size: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    color: #61dafb; /* Cor de destaque no hover */
    transform: scale(1.1); /* Aumenta ligeiramente o tamanho ao passar o mouse */
  }
`;

// Estilizando a imagem do ícone
const HomeIcon = styled.img`
  width: 35px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2); /* Animação de zoom no ícone */
  }
`;

const Home = () => {
  return (
    <HomeLink href='/'>
      <HomeIcon src={Home_Icon} alt="Botão Home" style={{width: 38}}/>
    </HomeLink>
  );
};

export default Home;
