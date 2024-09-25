import styled from 'styled-components'

export const Body = styled.div`
  background: #000; /* Gradiente suave para dar profundidade */
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px; /* Adiciona espaçamento interno para dispositivos menores */
  box-sizing: border-box;
`

export const Container = styled.div`
  border: 2px solid #61dafb; /* Cor de destaque para o contorno */
  width: 70%;
  max-width: 800px; /* Limita a largura máxima para evitar telas muito largas */
  background: #000; /* Fundo semitransparente para criar contraste suave */
  padding: 2.5rem;
  font-size: 24px;
  text-align: center;
  border-radius: 15px; /* Borda arredondada para um visual mais moderno */
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5); /* Sombra para efeito de elevação */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.7); /* Aumenta a sombra no hover */
  }

  @media (max-width: 760px) {
    width: 90%; /* Ajuste para telas menores */
    font-size: 20px;
    padding: 1.5rem;
  }
`
