import { useParams } from 'react-router-dom';
import { portfolio_projects } from '../Portfolio/Portfolio';
import * as S from './styles';
import Home from '../Header/home';
import { useLanguage } from '../../contexts/LanguageContext';

const PortfolioProject = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  if (id === undefined) {
    return <S.Container>{t('portfolio.noid')}</S.Container>;
  }

  const projectId = parseInt(id, 10);

  if (isNaN(projectId) || projectId < 0 || projectId >= portfolio_projects.length) {
    return <S.Container>{t('portfolio.notfound')}</S.Container>;
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
          <S.TechsTitle>{t('portfolio.techs.title')}</S.TechsTitle>
          <S.Techs>
            {selectedProject.techs.map((tech, index) => (
              <S.Tech key={index}>{tech}</S.Tech>
            ))}
          </S.Techs>

          <a href={link} target='_blank' rel='noopener noreferrer'>
            <S.Button>{t('portfolio.visit')}</S.Button>
          </a>
        </S.DetailsWrapper>
      </S.Main>
    </S.Container>
  );
};

export default PortfolioProject;
