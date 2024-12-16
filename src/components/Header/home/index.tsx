import styled from 'styled-components';
import Home_Icon from '../../../assets/images/icons/home.svg';

// Variáveis para temas e estilos
const COLORS = {
  primary: '#fff',
  hover: '#61dafb',
  background: '#000',
};

// Estilizando o container do link
const HomeLink = styled.a`
  font-weight: bold;
  color: ${COLORS.primary};
  font-size: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Espaço entre o ícone e o texto */
  text-decoration: none;
  background-color: transparent;
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: ${COLORS.hover}; /* Cor de destaque no hover */
    background-color: rgba(97, 218, 251, 0.1); /* Fundo levemente destacado */
    transform: translateY(-5px); /* Efeito de elevação no hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra suave */
  }

  &:active {
    transform: translateY(2px); /* Efeito de pressionado */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

// Estilizando a imagem do ícone
const HomeIcon = styled.img`
  width: 32px;
  height: 32px;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(15deg) scale(1.2); /* Efeito de rotação no ícone */
  }
`;

const HomeText = styled.span`
  font-size: 1.2em;
  font-weight: 600;
`;

const Home = () => {
  return (
    <HomeLink href="/">
      <HomeIcon src={Home_Icon} alt="Ícone Home" />
      <HomeText>Home</HomeText>
    </HomeLink>
  );
};

export default Home;
