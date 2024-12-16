import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0d0d0d; /* Tom de fundo mais escuro */
  min-height: 100vh;
  width: 100%;
  color: #e0e0e0; /* Cinza claro para contraste */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #111; /* Cinza quase preto */
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #000; /* Preto puro */
  color: #fff;
  text-align: center;

  p {
    margin-top: 10px;
    font-size: 1.1rem;
    max-width: 800px;
    color: #b3b3b3; /* Cinza intermediário */
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const SelectedTech = styled.select`
  padding: 10px;
  font-size: 1rem;
  background-color: #222; /* Fundo escuro */
  color: #e0e0e0;
  border: 1px solid #444; /* Borda escura */
  border-radius: 5px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

export const Card = styled.div`
  background: #1c1c1c; /* Cinza muito escuro */
  border: 1px solid #333; /* Borda escura */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.7);
  }

  h2 {
    margin: 10px 0;
    color: #f2f2f2; /* Branco suave */
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #b3b3b3; /* Texto cinza mais suave */
    padding: 0 10px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  gap: 10px;

  li {
    font-size: 0.9rem;
    font-weight: bold;
    color: #f2f2f2; /* Branco suave */
  }
`;
