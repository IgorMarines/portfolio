import styled from 'styled-components';

export const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xs);
  backdrop-filter: blur(10px);
`;

export const LanguageButton = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' 
    : 'transparent'};
  color: ${props => props.$active 
    ? 'var(--color-text-primary)' 
    : 'var(--color-text-tertiary)'};
  border: none;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);

  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'
      : 'rgba(14, 165, 233, 0.1)'};
    color: ${props => props.$active 
      ? 'var(--color-text-primary)'
      : 'var(--color-primary)'};
  }
`;

export const FlagIcon = styled.span`
  font-size: 1rem;
  line-height: 1;
`;
