import { useParams } from 'react-router-dom';
import { portfolio_projects } from '../Portfolio/Portfolio';
import * as S from './styles';
import Home from '../Header/home';

const PortfolioProject = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <div>ID do projeto não fornecido.</div>;
  }

  const projectId = parseInt(id, 10);

  if (isNaN(projectId) || projectId < 0 || projectId >= portfolio_projects.length) {
    return <div>Projeto não encontrado.</div>;
  }

  const selectedProject = portfolio_projects[projectId];

  const link = selectedProject.link.startsWith('http') ? selectedProject.link : `https://${selectedProject.link}`;

  return (
    <S.Container>
      <Home />
      <S.Header>
        <h1>{selectedProject.name}</h1>
        <S.Description>{selectedProject.description}</S.Description>
      </S.Header>
      <S.Main>
        <S.ImageWrapper>
          <S.ProjectImage src={selectedProject.image} alt={selectedProject.name} />
        </S.ImageWrapper>

        <S.DetailsWrapper>
          <S.TechsTitle>Tecnologias Usadas:</S.TechsTitle>
          <S.Techs>
            {selectedProject.techs.map((tech, index) => (
              <S.Tech key={index}>{tech}</S.Tech>
            ))}
          </S.Techs>

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <S.Button>Visitar Projeto</S.Button>
          </a>
        </S.DetailsWrapper>
      </S.Main>
    </S.Container>
  );
};

export default PortfolioProject;
