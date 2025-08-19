import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const ScrollToTopButton = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border: none;
  border-radius: 50%;
  color: var(--color-text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  z-index: 1000;
  box-shadow: var(--shadow-lg);
  opacity: ${props => props.$visible ? 1 : 0};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(20px)'};

  &:hover {
    animation: ${pulse} 0.6s ease-in-out;
    box-shadow: var(--shadow-lg), 0 0 20px rgba(14, 165, 233, 0.4);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    bottom: 1rem;
    right: 1rem;
  }
`;
