import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';

const Experience = () => {
  const { t } = useLanguage();

  const experienceData = [
    {
      company: "Modifique",
      role: t('experience.modifique.title'),
      period: t('experience.modifique.period'),
      duration: t('experience.modifique.duration'),
      location: t('experience.modifique.location'),
      isCurrent: false,
      description: t('experience.modifique.description'),
      responsibilities: t('experience.modifique.responsibilities') as string[]
    },
    {
      company: t('experience.covenant.company'),
      role: t('experience.covenant.title'),
      period: t('experience.covenant.period'),
      duration: t('experience.covenant.duration'),
      location: t('experience.covenant.location'),
      isCurrent: false,
      description: t('experience.covenant.description'),
      highlights: t('experience.covenant.highlights') as string[]
    },
    {
      company: t('experience.quivon.company'),
      role: t('experience.quivon.title'),
      period: t('experience.quivon.period'),
      duration: t('experience.quivon.duration'),
      location: t('experience.quivon.location'),
      isCurrent: false,
      description: t('experience.quivon.description'),
      achievements: t('experience.quivon.achievements') as string[]
    }
  ];

  return (
    <S.ExperienceSection id="experiencia">
      <S.Container>
        <S.SectionTitle className="animate__animated animate__fadeInUp">
          {t('experience.title')}
        </S.SectionTitle>
        
        <S.Timeline>
          {experienceData.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <S.TimelineItem 
                key={`${exp.company}-${index}`}
                $isLeft={isLeft}
                className="animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <S.TimelineDot />
                <S.TimelineContent $isLeft={isLeft}>
                  <S.CompanyName>{exp.company}</S.CompanyName>
                  <S.JobTitle>{exp.role}</S.JobTitle>
                  <S.Period>
                    {exp.period}
                    <S.PeriodBadge $isCurrent={exp.isCurrent}>
                      {exp.isCurrent ? t('experience.current') : exp.duration}
                    </S.PeriodBadge>
                  </S.Period>
                  <S.Location>{exp.location}</S.Location>
                  
                  <S.Description>{exp.description}</S.Description>
                  
                  {exp.responsibilities && (
                    <S.Achievements>
                      {exp.responsibilities.map((item, itemIndex) => (
                        <S.Achievement key={itemIndex}>
                          {item}
                        </S.Achievement>
                      ))}
                    </S.Achievements>
                  )}
                  
                  {exp.highlights && (
                    <S.Achievements>
                      {exp.highlights.map((item, itemIndex) => (
                        <S.Achievement key={itemIndex}>
                          {item}
                        </S.Achievement>
                      ))}
                    </S.Achievements>
                  )}
                  
                  {exp.achievements && (
                    <S.Achievements>
                      {exp.achievements.map((item, itemIndex) => (
                        <S.Achievement key={itemIndex}>
                          {item}
                        </S.Achievement>
                      ))}
                    </S.Achievements>
                  )}
                </S.TimelineContent>
              </S.TimelineItem>
            );
          })}
        </S.Timeline>
      </S.Container>
    </S.ExperienceSection>
  );
};

export default Experience;
