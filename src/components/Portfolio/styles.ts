import styled from 'styled-components'


export const Body = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: #fff;
    background: #000;
    min-height: 100vh;
    width: 100%;
`;

export const Container = styled.div`
  display: flex;
  background: #000;
  min-height: 100vh;
  justify-content: space-around;
  flex-direction: column;
`;

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SlideImage = styled.img`
  max-height: 100%;
  margin-bottom: 20px;
`;

export const SlideText = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  position: absolute;
  bottom: 40px;
  font-weight: 700;
  background: #000;
`;

export const SlideDescription = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
  position: absolute;
  bottom: 60px;
  font-weight: 700;
  background: #000;
`;

export const PortfolioText = styled.p`
    width: 90%;
    border: 2px solid #fff;
    padding: 1.5em;
    text-align: center;
    margin-bottom: 5px;
`