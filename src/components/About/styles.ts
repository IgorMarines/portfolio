import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: var(--spacing-2xl) 0;
  background: var(--color-bg-secondary);
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

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-2xl);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-xl);
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

export const TextContent = styled.div`
  color: var(--color-text-secondary);
  line-height: 1.8;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-lg);
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-lg);
`;

export const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: var(--spacing-lg) 0;
`;

export const HighlightItem = styled.li`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  font-size: 1rem;
  
  &::before {
    content: '✨';
    font-size: 1.2rem;
    color: var(--color-primary);
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
`;

export const StatCard = styled.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-primary);
  }
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-sm);
`;

export const StatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-tertiary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
