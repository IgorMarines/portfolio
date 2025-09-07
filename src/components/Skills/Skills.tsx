import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';

const Skills = () => {
  const { t, language } = useLanguage();

  const skillsData = [
    {
      category: t('skills.frontend'),
      icon: "🎨",
      skills: t('skills.frontend.list') as string[]
    },
    {
      category: t('skills.backend'),
      icon: "⚙️",
      skills: t('skills.backend.list') as string[]
    },
    {
      category: t('skills.tools'),
      icon: "🛠️",
      skills: t('skills.tools.list') as string[]
    },
    {
      category: t('skills.soft'),
      icon: "🧠",
      skills: t('skills.soft.list') as string[]
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
