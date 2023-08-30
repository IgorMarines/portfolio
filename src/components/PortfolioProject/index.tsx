import { useParams } from 'react-router-dom';
import { portfolio_projects } from '../Portfolio/Portfolio';
import * as S from './styles'
import { useMediaQuery } from '@mui/material';

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
      <h1>{selectedProject.name}</h1>
      <p>{selectedProject.description}</p>
      <S.Techs style={{flexWrap: isMobile ? 'wrap' : 'nowrap'}}>
        {selectedProject.techs.map(tech => {
          return (
            <p>{tech}</p>
          )
        })}
      </S.Techs>
      <img src={selectedProject.image} alt={selectedProject.name} />
    </S.Container>
  );
};

export default PortfolioProject;