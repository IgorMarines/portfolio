import styled from 'styled-components';

export const ProjectsSection = styled.section`
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`;

export const ProjectCard = styled.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-normal);
  position: relative;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
  }
`;

export const ProjectImage = styled.div<{ $bgImage: string }>`
  height: 200px;
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1));
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

export const ProjectContent = styled.div`
  padding: var(--spacing-xl);
`;

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
`;

export const ProjectDescription = styled.p`
  color: var(--color-text-tertiary);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
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

export const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-md);
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: var(--color-text-primary);
  text-decoration: none;
  border-radius: var(--radius-md);
  font-weight: 500;
  font-size: 0.875rem;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &.outline {
    background: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    
    &:hover {
      background: var(--color-primary);
      color: var(--color-text-primary);
    }
  }
`;

export const ProjectIcon = styled.span`
  font-size: 1rem;
`;
