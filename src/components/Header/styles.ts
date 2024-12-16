import styled from 'styled-components';

// Contêiner principal do Header
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #111;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #fff;
  flex-wrap: wrap;
`;

// Contêiner de Links
export const Link_Container = styled.div`
  display: inline-block;
  margin: 0 15px;
  padding: 5px 10px;
  transition: transform 0.3s ease;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 1.1em;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #61dafb;
      transform: translateY(-3px);
    }
  }
`;
