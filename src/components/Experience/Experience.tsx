import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';

const Experience = () => {
  const { t, language } = useLanguage();

  const experienceData = language === 'pt' ? [
    {
      company: "Modifique",
      role: "Desenvolvedor Full Stack",
      period: "março 2025 - junho 2025",
      duration: "4 meses",
      location: "Sorocaba, São Paulo, Brasil",
      isCurrent: false,
      description: "Atuei como desenvolvedor full stack no desenvolvimento de aplicações web modernas, colaborando em diversas frentes de projeto.",
      technologies: {
        "Frontend": ["React.js", "Vue.js", "EJS", "TypeScript"],
        "Backend": ["Laravel (PHP)", "Django (Python)", "NestJS", "Next.js"],
        "Database": ["PostgreSQL", "MySQL", "Supabase"],
        "Integrations": ["Asaas API", "Payment Systems"]
      },
      achievements: [
        "Criação de interfaces responsivas e interativas com React, Vue e EJS",
        "Integração de APIs RESTful e construção de fluxos completos de CRUD",
        "Implementação de autenticação, controle de acesso e painéis administrativos",
        "Integração com a API do Asaas para gestão de pagamentos, cobranças e assinaturas",
        "Otimização de queries e estruturação de banco de dados relacional e em nuvem"
      ]
    },
    {
      company: "Covenant Technology",
      role: "Desenvolvedor Full Stack",
      period: "fevereiro 2024 - setembro 2024",
      duration: "8 meses",
      location: "São Paulo, Brasil",
      isCurrent: false,
      description: "Desenvolvimento de aplicações robustas com foco em experiência do cliente e implementação de regras de negócio complexas.",
      technologies: {
        "Frontend": ["Vue.js", "JavaScript", "CSS3"],
        "Backend": ["Laravel", "PHP", "Python"],
        "Database": ["MySQL"],
        "Tools": ["Excel", "RPA", "Clean Architecture"]
      },
      achievements: [
        "Desenvolvimento de CRUDs robustos e implementação de regras de negócio complexas",
        "Atuação com RPA (Robotic Process Automation), otimizando processos internos",
        "Interação constante com clientes para entender necessidades e criar soluções personalizadas",
        "Colaboração com times utilizando Clean Architecture para aplicações escaláveis",
        "Foco na experiência do cliente em todas as frentes de desenvolvimento"
      ]
    },
    {
      company: "Quivon",
      role: "Desenvolvedor Front-End",
      period: "junho 2022 - julho 2023",
      duration: "1 ano e 2 meses",
      location: "São Paulo, Brasil",
      isCurrent: false,
      description: "Desenvolvimento de interfaces modernas e responsivas com foco em experiência do usuário e qualidade de código.",
      technologies: {
        "Frontend": ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
        "State Management": ["Redux", "Redux-Sagas"],
        "Styling": ["Styled-Components"],
        "Testing": ["Unit Tests", "Quality Assurance"]
      },
      achievements: [
        "Desenvolvimento de interfaces envolventes, responsivas e amigáveis com ReactJS e TypeScript",
        "Colaboração próxima com equipe de design para implementações funcionais otimizadas",
        "Implementação de testes unitários garantindo qualidade e estabilidade do código",
        "Criação de sites otimizados e acessíveis para diferentes dispositivos",
        "Utilização de Redux e Redux-Sagas para gerenciamento eficiente de estado",
        "Aplicação de boas práticas com Styled-Components para componentes reutilizáveis"
      ]
    }
  ] : [
    {
      company: "Modifique",
      role: "Full Stack Developer",
      period: "March 2025 - June 2025",
      duration: "4 months",
      location: "Sorocaba, São Paulo, Brazil",
      isCurrent: false,
      description: "Worked as a full stack developer in modern web application development, collaborating on various project fronts.",
      technologies: {
        "Frontend": ["React.js", "Vue.js", "EJS", "TypeScript"],
        "Backend": ["Laravel (PHP)", "Django (Python)", "NestJS", "Next.js"],
        "Database": ["PostgreSQL", "MySQL", "Supabase"],
        "Integrations": ["Asaas API", "Payment Systems"]
      },
      achievements: [
        "Created responsive and interactive interfaces with React, Vue and EJS",
        "Integrated RESTful APIs and built complete CRUD flows",
        "Implemented authentication, access control, and administrative panels",
        "Integrated with Asaas API for payment, billing and subscription management",
        "Optimized queries and structured relational and cloud databases"
      ]
    },
    {
      company: "Covenant Technology",
      role: "Full Stack Developer",
      period: "February 2024 - September 2024",
      duration: "8 months",
      location: "São Paulo, Brazil",
      isCurrent: false,
      description: "Development of robust applications focused on customer experience and implementation of complex business rules.",
      technologies: {
        "Frontend": ["Vue.js", "JavaScript", "CSS3"],
        "Backend": ["Laravel", "PHP", "Python"],
        "Database": ["MySQL"],
        "Tools": ["Excel", "RPA", "Clean Architecture"]
      },
      achievements: [
        "Developed robust CRUDs and implemented complex business rules",
        "Worked with RPA (Robotic Process Automation), optimizing internal processes",
        "Constant interaction with clients to understand needs and create customized solutions",
        "Collaborated with teams using Clean Architecture for scalable applications",
        "Focused on customer experience in all development fronts"
      ]
    },
    {
      company: "Quivon",
      role: "Front-End Developer",
      period: "June 2022 - July 2023",
      duration: "1 year and 2 months",
      location: "São Paulo, Brazil",
      isCurrent: false,
      description: "Development of modern and responsive interfaces focused on user experience and code quality.",
      technologies: {
        "Frontend": ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
        "State Management": ["Redux", "Redux-Sagas"],
        "Styling": ["Styled-Components"],
        "Testing": ["Unit Tests", "Quality Assurance"]
      },
      achievements: [
        "Developed engaging, responsive and user-friendly interfaces with ReactJS and TypeScript",
        "Close collaboration with design team for optimized functional implementations",
        "Implemented unit tests ensuring code quality and stability",
        "Created optimized and accessible websites for different devices",
        "Used Redux and Redux-Sagas for efficient state management",
        "Applied best practices with Styled-Components for reusable components"
      ]
    }
  ];

  return (
    <S.ExperienceSection id="experiencia">
      <S.Container>
        <S.SectionTitle className="animate__animated animate__fadeInUp">
          {t('experience.title')}
        </S.SectionTitle>
        
        <S.Timeline>
          {experienceData.map((exp, index) => (
            <S.TimelineItem 
              key={exp.company}
              $isLeft={index % 2 === 0}
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <S.TimelineDot />
              <S.TimelineContent $isLeft={index % 2 === 0}>
                <S.CompanyName>{exp.company}</S.CompanyName>
                <S.JobTitle>{exp.role}</S.JobTitle>
                
                <S.Period>
                  <span>{exp.period}</span>
                  <S.PeriodBadge $isCurrent={exp.isCurrent}>
                    {exp.isCurrent ? t('experience.current') : exp.duration}
                  </S.PeriodBadge>
                </S.Period>
                
                <S.Location>{exp.location}</S.Location>
                
                <S.Description>{exp.description}</S.Description>
                
                <S.TechStack>
                  <S.TechStackTitle>{language === 'pt' ? 'Tecnologias:' : 'Technologies:'}</S.TechStackTitle>
                  {Object.entries(exp.technologies).map(([category, techs]) => (
                    <div key={category} style={{ marginBottom: 'var(--spacing-sm)' }}>
                      <strong style={{ color: 'var(--color-text-primary)', fontSize: '0.9rem' }}>
                        {category}:
                      </strong>
                      <S.TechList style={{ marginTop: 'var(--spacing-xs)' }}>
                        {techs.map((tech: any) => (
                          <S.TechTag key={tech}>{tech}</S.TechTag>
                        ))}
                      </S.TechList>
                    </div>
                  ))}
                </S.TechStack>
                
                <S.Achievements>
                  {exp.achievements.map((achievement, i) => (
                    <S.Achievement key={i}>{achievement}</S.Achievement>
                  ))}
                </S.Achievements>
              </S.TimelineContent>
            </S.TimelineItem>
          ))}
        </S.Timeline>
      </S.Container>
    </S.ExperienceSection>
  );
};

export default Experience;
