import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #0d0d0d; /* Fundo principal escuro */
  min-height: 100vh;
  padding-top: 20px;
  color: #fff;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

export const Header = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 15px;
    font-weight: 700;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  }

  p {
    font-size: 1.2rem;
    color: #aaa; /* Cinza claro */
    line-height: 1.6;
    max-width: 900px;
    margin: 0 auto;
    text-align: justify;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #ccc; /* Tom mais suave */
  line-height: 1.8;
  margin-top: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
  padding: 40px 20px;
  flex-wrap: wrap;

  @media (max-width: 760px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);

  @media (max-width: 760px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const DetailsWrapper = styled.div`
  width: 50%;
  max-width: 600px;
  text-align: left;
  padding: 20px;
  background: #1a1a1a; /* Fundo escuro */
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const TechsTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 15px;
`;

export const Techs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Tech = styled.p`
  background: #2c2c2c;
  color: #f1f1f1;
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #444;
    transform: translateY(-5px);
  }
`;

export const Button = styled.button`
  background: #61dafb;
  color: #111;
  border: none;
  padding: 12px 20px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #4fa3e2;
    transform: scale(1.05);
  }
`;
