import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillsData = language === 'pt' ? [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Styled Components", "Material-UI", "Design Responsivo", "Git"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express", "APIs RESTful", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Autenticação", "JWT"]
    },
    {
      category: "Ferramentas",
      icon: "🛠️",
      skills: ["VS Code", "Git", "GitHub", "npm", "Webpack", "Vite", "Docker", "Postman", "Figma"]
    },
    {
      category: "Soft Skills",
      icon: "🧠",
      skills: ["Resolução de Problemas", "Trabalho em Equipe", "Comunicação", "Aprendizado Contínuo", "Criatividade", "Pensamento Analítico"]
    }
  ] : [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Styled Components", "Material-UI", "Responsive Design", "Git"]
    },
    {
      category: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Authentication", "JWT"]
    },
    {
      category: "Tools",
      icon: "🛠️",
      skills: ["VS Code", "Git", "GitHub", "npm", "Webpack", "Vite", "Docker", "Postman", "Figma"]
    },
    {
      category: "Soft Skills",
      icon: "🧠",
      skills: ["Problem Solving", "Teamwork", "Communication", "Continuous Learning", "Creativity", "Analytical Thinking"]
    }
  ];

  return (
    <S.SkillsSection id="skills">
      <S.Container>
        <S.SectionTitle className="animate__animated animate__fadeInUp">
          {t('skills.title')}
        </S.SectionTitle>
        
        <S.SkillsGrid>
          {skillsData.map((category, index) => (
            <S.SkillCategory 
              key={category.category}
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <S.CategoryTitle>
                <S.CategoryIcon>{category.icon}</S.CategoryIcon>
                {category.category}
              </S.CategoryTitle>
              
              <S.SkillsList>
                {category.skills.map((skill) => (
                  <S.SkillTag key={skill}>
                    {skill}
                  </S.SkillTag>
                ))}
              </S.SkillsList>
            </S.SkillCategory>
          ))}
        </S.SkillsGrid>
      </S.Container>
    </S.SkillsSection>
  );
};

export default Skills;
