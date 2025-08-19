import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';

const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      number: "3+",
      label: language === 'pt' ? 'Anos de Experiência' : 'Years of Experience'
    },
    {
      number: "20+",
      label: language === 'pt' ? 'Projetos Concluídos' : 'Completed Projects'
    },
    {
      number: "10+",
      label: language === 'pt' ? 'Tecnologias' : 'Technologies'
    },
    {
      number: "100%",
      label: language === 'pt' ? 'Dedicação' : 'Dedication'
    }
  ];

  const highlights = language === 'pt' ? [
    'Desenvolvedor Full Stack com foco em React e Node.js',
    'Experiência em desenvolvimento de APIs RESTful e sistemas robustos',
    'Conhecimento sólido em bancos de dados SQL e NoSQL',
    'Implementação de soluções escaláveis e otimizadas',
    'Integração com sistemas de pagamento e APIs externas',
    'Metodologias ágeis e trabalho em equipe'
  ] : [
    'Full Stack Developer focused on React and Node.js',
    'Experience in RESTful API development and robust systems',
    'Solid knowledge in SQL and NoSQL databases',
    'Implementation of scalable and optimized solutions',
    'Integration with payment systems and external APIs',
    'Agile methodologies and team collaboration'
  ];

  return (
    <S.AboutSection id="sobre">
      <S.Container>
        <S.SectionTitle className="animate__animated animate__fadeInUp">
          {t('about.title')}
        </S.SectionTitle>
        
        <S.Content>
          <S.ImageContainer className="animate__animated animate__fadeInLeft">
            <S.ProfileImage 
              src="/src/assets/images/professional_selfie.png" 
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
