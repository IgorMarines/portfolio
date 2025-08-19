import styled from 'styled-components';

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

export const LanguageButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' 
    : 'transparent'};
  color: ${props => props.$active 
    ? 'var(--color-text-primary)' 
    : 'var(--color-text-secondary)'};
  border: 1px solid ${props => props.$active 
    ? 'transparent' 
    : 'var(--color-border)'};
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  min-width: 35px;
  height: 32px;

  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' 
      : 'var(--color-bg-tertiary)'};
    border-color: var(--color-primary);
    color: ${props => props.$active 
      ? 'var(--color-text-primary)' 
      : 'var(--color-primary)'};
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    min-width: 30px;
    height: 28px;
    padding: var(--spacing-xs);
  }
`;
