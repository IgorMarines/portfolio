import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    justify-content: center;
    background-color: #000; 
    color: #ffffff;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    padding: 1.5rem;
    background-color: #000;
    border-radius: 10px;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: #e0e0e0;
`;

export const IntroText = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 2rem;
    color: #b0b0b0;
`;

export const SkillsSection = styled.div`
    margin-bottom: 2rem;
`;

export const SkillList = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const SkillItem = styled.li`
    font-size: 1rem;
    color: ${({ color }) => color};
`;

export const ExperienceSection = styled.div`
    margin-bottom: 2rem;
`;

export const Experience = styled.div`
    margin-bottom: 1.5rem;
`;

export const CompanyName = styled.h4`
    font-size: 1.2rem;
    font-weight: bold;
    color: #e0e0e0;
`;

export const Position = styled.h5`
    font-size: 1rem;
    font-weight: normal;
    color: #a0a0a0;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;
`;

export const ContactSection = styled.div`
    text-align: center;
    font-size: 1rem;
`;

export const Links = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
    & a {
        color: #1e90ff;
        text-decoration: none;
        font-weight: bold;
        &:hover {
            text-decoration: underline;
        }
    }
`;
