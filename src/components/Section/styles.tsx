import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-color: #111;
  color: #fff;
`;

export const Border = styled.div`
  border: 2px solid #444;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 16px #4db6ac;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Name = styled.h1`
  font-size: 56px;
  font-weight: bold;
  margin: 0;
  color: #fff;
`;

export const Role = styled.h2`
  font-size: 32px;
  margin: 0;
  color: #ddd;

  a {
    text-decoration: none;
    color: #4db6ac;
    border-bottom: 2px solid transparent;
    transition: border-color 0.3s;

    &:hover {
      border-color: #888;
    }
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #bbb;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface ButtonProps {
  $outlined?: boolean;
}

export const Button = styled.a<ButtonProps>`
  background-color: ${(props) => (props.$outlined ? 'transparent' : '#4db6ac')};
  color: ${(props) => (props.$outlined ? '#fff' : '#111')};
  border: ${(props) => (props.$outlined ? '2px solid #4db6ac' : 'none')};
  padding: 10px 20px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$outlined ? '#555' : '#777')};
    color: #fff;
  }
`;

export const Image = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
