import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';
import fotoProfissional from '../../assets/images/professional_selfie.png';

const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      number: "3+",
      label: t('stats.experience')
    },
    {
      number: "20+", 
      label: t('stats.projects')
    },
    {
      number: "10+",
      label: t('about.technologies')
    },
    {
      number: "100%",
      label: t('stats.dedication')
    }
  ];

  const highlights = t('about.highlights') as string[];

  return (
    <S.AboutSection id="sobre">
      <S.Container>
        <S.SectionTitle className="animate__animated animate__fadeInUp">
          {t('about.title')}
        </S.SectionTitle>
        
        <S.Content>
          <S.ImageContainer className="animate__animated animate__fadeInLeft">
            <S.ProfileImage 
              src={fotoProfissional}
              alt="Igor Marines"
            />
          </S.ImageContainer>
          
          <S.TextContent className="animate__animated animate__fadeInRight">
            <S.Subtitle>{t('about.subtitle')}</S.Subtitle>
            <S.Description>{t('about.description')}</S.Description>
            
            <S.HighlightList>
              {highlights.map((highlight, index) => (
                <S.HighlightItem key={index}>{highlight}</S.HighlightItem>
              ))}
            </S.HighlightList>
          </S.TextContent>
        </S.Content>
        
        <S.StatsContainer className="animate__animated animate__fadeInUp" 
                         style={{ animationDelay: '0.3s' }}>
          {stats.map((stat, index) => (
            <S.StatCard key={index}>
              <S.StatNumber>{stat.number}</S.StatNumber>
              <S.StatLabel>{stat.label}</S.StatLabel>
            </S.StatCard>
          ))}
        </S.StatsContainer>
      </S.Container>
    </S.AboutSection>
  );
};

export default About;
