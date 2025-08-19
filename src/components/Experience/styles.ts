import styled from 'styled-components';

export const ExperienceSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background: var(--color-bg-primary);
  position: relative;
  z-index: 2;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: var(--spacing-2xl);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, var(--color-primary), var(--color-secondary));
    transform: translateX(-50%);
    border-radius: var(--radius-sm);
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

export const TimelineItem = styled.div<{ $isLeft?: boolean }>`
  position: relative;
  margin-bottom: var(--spacing-2xl);
  display: flex;
  justify-content: ${props => props.$isLeft ? 'flex-start' : 'flex-end'};
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 50px;
  }
`;

export const TimelineContent = styled.div<{ $isLeft?: boolean }>`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  backdrop-filter: blur(10px);
  width: 45%;
  position: relative;
  transition: all var(--transition-normal);

  &::before {
    content: '';
    position: absolute;
    top: 30px;
    ${props => props.$isLeft ? 'right: -10px' : 'left: -10px'};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${props => props.$isLeft 
      ? '10px 0 10px 10px' 
      : '10px 10px 10px 0'};
    border-color: ${props => props.$isLeft 
      ? 'transparent transparent transparent var(--color-border)' 
      : 'transparent var(--color-border) transparent transparent'};
    
    @media (max-width: 768px) {
      left: -10px;
      border-width: 10px 10px 10px 0;
      border-color: transparent var(--color-border) transparent transparent;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 30px;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border: 3px solid var(--color-bg-primary);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
  
  @media (max-width: 768px) {
    left: 20px;
  }
`;

export const CompanyName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
`;

export const JobTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: var(--spacing-sm);
`;

export const Period = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-tertiary);
  font-size: 0.9rem;
  font-weight: 500;
`;

export const PeriodBadge = styled.span<{ $isCurrent?: boolean }>`
  background: ${props => props.$isCurrent 
    ? 'linear-gradient(135deg, var(--color-accent), var(--color-primary))' 
    : 'var(--color-bg-tertiary)'};
  color: ${props => props.$isCurrent 
    ? 'var(--color-text-primary)' 
    : 'var(--color-text-tertiary)'};
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Location = styled.span`
  color: var(--color-text-muted);
  font-size: 0.875rem;
`;

export const Description = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

export const TechStack = styled.div`
  margin-bottom: var(--spacing-lg);
`;

export const TechStackTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`;

export const TechTag = styled.span`
  background: rgba(14, 165, 233, 0.1);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-md);
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(14, 165, 233, 0.2);
`;

export const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Achievement = styled.li`
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-sm);
  position: relative;
  padding-left: var(--spacing-lg);

  &::before {
    content: '✨';
    position: absolute;
    left: 0;
    top: 0;
  }
`;
