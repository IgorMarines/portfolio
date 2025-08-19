import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(14, 165, 233, 0.6), 0 0 60px rgba(139, 92, 246, 0.3);
  }
`;

const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0.3) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) 0;
  position: relative;
  z-index: 2;
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

export const Greeting = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
  margin: 0;
  font-family: var(--font-family-mono);
`;

export const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-primary) 50%, var(--color-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
`;

export const Role = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin: 0;
  color: var(--color-text-secondary);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TypedText = styled.span`
  color: var(--color-primary);
`;

export const Cursor = styled.span`
  animation: ${blink} 1s infinite;
  color: var(--color-primary);
  font-weight: 300;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--color-text-tertiary);
  max-width: 500px;
  margin: 0;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin: var(--spacing-lg) 0;
  
  @media (max-width: 768px) {
    gap: var(--spacing-md);
  }
`;

export const Stat = styled.div`
  text-align: center;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-text-primary);
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left var(--transition-slow);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg), 0 0 30px rgba(14, 165, 233, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  color: var(--color-primary);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--color-primary);
    color: var(--color-text-primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

export const ButtonIcon = styled.span`
  font-size: 1.1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all var(--transition-normal);
  backdrop-filter: blur(10px);

  &:hover {
    background: var(--color-primary);
    color: var(--color-text-primary);
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
  }
`;

export const SocialIcon = styled.span`
  font-size: 1.5rem;
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: ${glow} 3s ease-in-out infinite;
  z-index: -1;
`;

export const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  animation: ${float} 6s ease-in-out infinite;

  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg), 0 0 40px rgba(14, 165, 233, 0.3);
  }
`;

interface FloatingElementProps {
  $position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const FloatingElement = styled.div<FloatingElementProps>`
  position: absolute;
  font-size: 2rem;
  animation: ${bounceIn} 2s ease-out, ${float} 4s ease-in-out infinite;
  z-index: 1;
  
  ${props => {
    switch (props.$position) {
      case 'top-left':
        return 'top: 10%; left: 10%;';
      case 'top-right':
        return 'top: 10%; right: 10%;';
      case 'bottom-left':
        return 'bottom: 10%; left: 10%;';
      case 'bottom-right':
        return 'bottom: 10%; right: 10%;';
      default:
        return '';
    }
  }}
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-tertiary);
  animation: ${float} 3s ease-in-out infinite;
`;

export const ScrollText = styled.span`
  font-size: 0.875rem;
  font-family: var(--font-family-mono);
`;

export const ScrollArrow = styled.span`
  font-size: 1.5rem;
  animation: ${float} 2s ease-in-out infinite;
`;

// Manter compatibilidade com estilos antigos
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
