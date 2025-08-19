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
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const LogoSubtext = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
  font-family: var(--font-family-mono);
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.65rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DesktopNavigation = styled.nav`
  display: flex;
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  display: none;
  align-items: center;
  gap: var(--spacing-sm);
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  
  span {
    width: 24px;
    height: 2px;
    background: var(--color-text-primary);
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    
    &:first-child {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
      transform: ${({ $isOpen }) => $isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    
    &:nth-child(3) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const MobileNavigation = styled.nav<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 280px;
  background: rgba(15, 15, 35, 0.98);
  backdrop-filter: blur(20px);
  border-left: 1px solid var(--color-border);
  flex-direction: column;
  padding: 80px var(--spacing-lg) var(--spacing-lg);
  transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNavLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--color-primary);
    transform: translateX(8px);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

export const MobileOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease-in-out;
  z-index: 999;
  
  @media (max-width: 768px) {
    display: block;
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
