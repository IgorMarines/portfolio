import { useParams } from 'react-router-dom';
import { portfolio_projects } from '../Portfolio/Portfolio';
import * as S from './styles'
import { useMediaQuery } from '@mui/material';
import Home from '../Header/home';

const PortfolioProject = () => {

  const isMobile = useMediaQuery('(max-width:600px)');

  const { id } = useParams();

  if (id === undefined) {
    return <div>ID do projeto não fornecido.</div>;
  }

  const projectId = parseInt(id, 10);

  if (isNaN(projectId) || projectId < 0 || projectId >= portfolio_projects.length) {
    return <div>Projeto não encontrado.</div>;
  }

  const selectedProject = portfolio_projects[projectId];

  return (
    <S.Container>
      <Home />
      <h1>{selectedProject.name}</h1>
      <p>
        {selectedProject.description}
      </p>
      <S.Main>
        <S.Techs style={{ flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
          {selectedProject.techs.map((tech, index) => {
            return (
              <p className={`animate__animated animate__fadeIn animate__delay-${index}s`}>{tech}</p>
            )
          })}
        </S.Techs>

        <a href={`http://${selectedProject.link}`} target='_blank' rel='noopener noreferrer'>
          <img src={selectedProject.image} alt={selectedProject.name} />
        </a>
      </S.Main>
    </S.Container>
  );
};

export default PortfolioProject;
