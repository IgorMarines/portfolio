import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 100vh;
  width: 100%;
  color: #000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
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
  border: 2px solid #565555;
  border-radius: 15px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 350px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.3);
  }

  a {
    display: block;
    text-align: center;
  }

  h2 {
    margin-top: 10px;
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    margin-top: 10px;
    font-weight: 600;
    color: #333;
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
      font-size: 0.9rem;
      background-color: #000;
      color: #fff;
      padding: 8px 12px;
      border-radius: 5px;
      font-weight: bold;
      transition: all 0.2s ease;

      &:hover {
        background-color: #fff;
        color: #000;
        border: 2px solid #000;
        transform: scale(1.05);
      }
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const PortfolioText = styled.p`
  max-width: 900px;
  background-color: #000;
  color: #fff;
  padding: 1.5em;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const SelectedTech = styled.select`
  width: 220px;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 2px solid #61dafb;
  border-radius: 8px;
  background-color: #1c1c1c;
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

