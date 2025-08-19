import * as S from './styles';
import taskManager from '../../assets/images/TaskManager.png';
import sistemaAdvocacia from '../../assets/images/sistemaAdvocacia.png';
import plataformaEstudos from '../../assets/images/plataformaEstudos.png';
import filmeAleatorio from '../../assets/images/filmeAleatorio.png';
import informacoesMeteorologicas from '../../assets/images/InformacoesMetereologicas.png';
import landingPageCabelos from '../../assets/images/LandingPageCabelos.png';

const Projects = () => {
  const projectsData = [
    {
      title: "Task Manager",
      description: "Sistema completo de gerenciamento de tarefas com interface moderna e responsiva. Inclui funcionalidades de CRUD, filtros avançados e dashboard interativo.",
      image: taskManager,
      technologies: ["React", "TypeScript", "Styled Components", "Local Storage"],
      liveLink: "#",
      codeLink: "https://github.com/IgorMarines/task-manager"
    },
    {
      title: "Sistema de Advocacia",
      description: "Plataforma profissional para escritórios de advocacia com gestão de clientes, casos jurídicos e documentos. Interface intuitiva e segura.",
      image: sistemaAdvocacia,
      technologies: ["React", "Node.js", "MySQL", "JWT", "Material-UI"],
      liveLink: "#",
      codeLink: "https://github.com/IgorMarines/sistema-advocacia"
    },
    {
      title: "Plataforma de Estudos",
      description: "Sistema educacional completo com cursos, aulas interativas e acompanhamento de progresso. Desenvolvido com foco na experiência do usuário.",
      image: plataformaEstudos,
      technologies: ["React", "TypeScript", "Firebase", "Styled Components"],
      liveLink: "#",
      codeLink: "https://github.com/IgorMarines/plataforma-estudos"
    },
    {
      title: "Filme Aleatório",
      description: "Aplicação que sugere filmes aleatórios baseados nas preferências do usuário. Integração com APIs externas e design responsivo.",
      image: filmeAleatorio,
      technologies: ["React", "API REST", "CSS3", "JavaScript"],
      liveLink: "#",
      codeLink: "https://github.com/IgorMarines/filme-aleatorio"
    },
    {
      title: "Informações Meteorológicas",
      description: "App de clima em tempo real com previsões detalhadas, mapas interativos e notificações personalizadas. Interface elegante e intuitiva.",
      image: informacoesMeteorologicas,
      technologies: ["React", "Weather API", "Geolocation", "Chart.js"],
      liveLink: "#",
      codeLink: "https://github.com/IgorMarines/weather-app"
    },
    {
      title: "Landing Page - Cabelos",
      description: "Landing page moderna para salão de beleza especializado em cuidados capilares. Design atrativo com animações e otimizada para conversões.",
      image: landingPageCabelos,
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      liveLink: "#",
      codeLink: "https://github.com/IgorMarines/landing-cabelos"
    }
  ];

  return (
    <S.ProjectsSection id="projetos">
      <S.Container>
        <S.SectionTitle className="animate__animated animate__fadeInUp">
          Meus Projetos
        </S.SectionTitle>
        
        <S.ProjectsGrid>
          {projectsData.map((project, index) => (
            <S.ProjectCard 
              key={project.title}
              className="animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <S.ProjectImage $bgImage={project.image} />
              
              <S.ProjectContent>
                <S.ProjectTitle>{project.title}</S.ProjectTitle>
                <S.ProjectDescription>{project.description}</S.ProjectDescription>
                
                <S.TechStack>
                  {project.technologies.map((tech) => (
                    <S.TechTag key={tech}>{tech}</S.TechTag>
                  ))}
                </S.TechStack>
                
                <S.ProjectLinks>
                  <S.ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <S.ProjectIcon>🌐</S.ProjectIcon>
                    Ver Projeto
                  </S.ProjectLink>
                  <S.ProjectLink 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="outline"
                  >
                    <S.ProjectIcon>💻</S.ProjectIcon>
                    Código
                  </S.ProjectLink>
                </S.ProjectLinks>
              </S.ProjectContent>
            </S.ProjectCard>
          ))}
        </S.ProjectsGrid>
      </S.Container>
    </S.ProjectsSection>
  );
};

export default Projects;
