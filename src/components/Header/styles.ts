import styled from 'styled-components';

interface HeaderProps {
  $isScrolled?: boolean;
}

export const Header = styled.header<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.$isScrolled 
    ? 'rgba(15, 15, 35, 0.95)' 
    : 'rgba(15, 15, 35, 0.8)'};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-normal);
  padding: ${props => props.$isScrolled ? '0.75rem 0' : '1rem 0'};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-md);
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`;

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  line-height: 1;
`;

export const LogoSubtext = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
  font-family: var(--font-family-mono);
  letter-spacing: 0.5px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    gap: var(--spacing-md);
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    transition: width var(--transition-normal);
    z-index: -1;
  }

  &:hover {
    color: var(--color-text-primary);
    transform: translateY(-2px);
    
    &::before {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: var(--spacing-xs) var(--spacing-sm);
  }
`;

export const NavIcon = styled.span`
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Mantendo compatibilidade com o código antigo
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
