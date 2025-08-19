import styled, { keyframes } from 'styled-components';

const heartbeat = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

export const Footer = styled.footer`
  background: var(--color-bg-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  margin-top: auto;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-sm);
`;

export const LogoText = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
`;

export const LogoSubtext = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
  font-family: var(--font-family-mono);
  font-weight: 500;
`;

export const Description = styled.p`
  color: var(--color-text-tertiary);
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
`;

export const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

export const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const QuickLinkTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-sm) 0;
`;

export const QuickLink = styled.a`
  color: var(--color-text-tertiary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all var(--transition-normal);
  padding: var(--spacing-xs) 0;
  
  &:hover {
    color: var(--color-primary);
    padding-left: var(--spacing-sm);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

export const SocialLinkTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-sm) 0;
`;

export const SocialLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-text-tertiary);
  text-decoration: none;
  font-size: 0.9rem;
  padding: var(--spacing-xs) 0;
  transition: all var(--transition-normal);
  
  &:hover {
    color: var(--color-primary);
    transform: translateX(var(--spacing-xs));
  }
`;

export const SocialIcon = styled.span`
  font-size: 1rem;
`;

export const Divider = styled.div`
  height: 1px;
  background: var(--color-border);
  margin: var(--spacing-xl) 0;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.span`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`;

export const MadeWith = styled.span`
  color: var(--color-text-muted);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

export const Heart = styled.span`
  color: #ef4444;
  animation: ${heartbeat} 1.5s ease-in-out infinite;
`;