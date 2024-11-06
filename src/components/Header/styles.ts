import styled, { keyframes } from 'styled-components';

export const Header = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5em 2.5em;
  background-color: #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: width 0.3s ease;

  @media (max-width: 600px) {
    padding: 1em 1.5em;
  }
`;

const LinkPulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
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
  font-size: 1.5em;
  font-weight: 600;
  gap: 15px;

  img {
    width: 35px;
    height: 35px;
    transition: transform 0.3s ease, filter 0.3s ease;
    border-radius: 5px;
    
    &:hover {
      animation: ${LinkPulse} 1.5s ease-in-out infinite;
      filter: brightness(1.2);
      transform: scale(1.2);
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    font-size: 1.2em;
    font-weight: 600;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.1);
      color: #61dafb; /* Blue highlight */
    }
  }
`;
