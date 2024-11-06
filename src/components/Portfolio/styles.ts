import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f5; /* Um tom mais claro para destacar os cards */
  min-height: 100vh;
  width: 100%;
  color: #333;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f7f7f7;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  padding: 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd; /* Bordas mais suaves */
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 350px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
  }

  a {
    display: block;
    text-align: center;
  }

  h2 {
    margin-top: 10px;
    font-size: 1.4rem;
    text-align: center;
    color: #333;
  }

  p {
    margin-top: 10px;
    font-weight: 600;
    color: #555;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;

    li {
      font-size: 0.85rem;
      background-color: #333;
      color: #fff;
      padding: 6px 10px;
      border-radius: 4px;
      font-weight: bold;
      transition: all 0.2s ease;

      &:hover {
        background-color: #fff;
        color: #333;
        border: 1px solid #333;
        transform: scale(1.1);
      }
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PortfolioText = styled.p`
  max-width: 900px;
  color: #fff;
  padding: 1.5em;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
`;

export const SelectedTech = styled.select`
  width: 220px;
  padding: 10px 15px;
  margin-bottom: 20px;
  border: 1px solid #61dafb;
  border-radius: 6px;
  background-color: #282c34;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:hover {
    border-color: #fff;
    background-color: #333;
  }
`;
