import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './styles';
import Footer from '../Footer/Footer.tsx';
import Logotipo from '../Header/home/index.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import filmeAleatorio from '../../assets/images/filmeAleatorio.png'

import informacoesMetereologicas from '../../assets/images/InformacoesMetereologicas.png'
//listaPresenca
import listaPresenca from '../../assets/images/listaPresenca.png'
//mobiliariaLandingPage
import mobiliariaLandingPage from '../../assets/images/mobiliariaLandingPage.png'
// plataformaEstudos
import plataformaEstudos from '../../assets/images/plataformaEstudos.png'
// LandingPageCabelos
import landingPageCabelos from '../../assets/images/LandingPageCabelos.png'
// quivonLandingPageEstagio
import quivonLandingPage from '../../assets/images/quivonLandingPage.png'
// BatePapo
import batePapoGlobal from '../../assets/images/batePapo.png'
// todoMobile
import todoMobile from '../../assets/images/mobile-todo.png'
// sistemaAdvocacia
import sistemaAdvocacia from '../../assets/images/sistemaAdvocacia.png'

// eslint-disable-next-line react-refresh/only-export-components
export const portfolio_projects = [
  {
    name: 'Estágio',
    description: `Plataforma para personais`,
    link: 'www.quivon.com.br',
    image: quivonLandingPage,
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACTJS', 'STYLED-COMPONENTS', 'REDUX', 'REDUX-SAGAS']
  },
  {
    name: 'Sistema de Advocacia',
    link: '#',
    description: 'Sistema de advocacia para advogados',
    image: sistemaAdvocacia,
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'VUEJS', 'LARAVEL', 'MYSQL', 'VUETIFY']
  },
  {
    name: 'Plataforma para cursos',
    description: 'Plataforma EAD',
    link: 'ignite-lab-react-mu-two.vercel.app/',
    image: plataformaEstudos,
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'TYPESCRIPT']
  },
  {
    name: 'Bate Papo Global',
    description: 'Bate Papo Global para interagir com outras pessoas',
    link: 'bate-papo-global.vercel.app',
    image: batePapoGlobal,
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'TYPESCRIPT', 'STYLED-COMPONENTS', 'FIREBASE'],
  },
  {
    name: 'Clima360',
    description: 'Confira agora como está a temperatura de qualquer local do mundo!',
    link: 'clima360.vercel.app/',
    image: informacoesMetereologicas,
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'VUE'],
  },
  {
    name: 'Landing Page Cabelereiro',
    description: 'Landing Page para barbearia',
    link: 'https://whitelabel-profissional.vercel.app/',
    image: landingPageCabelos,
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS']
  },
  {
    name: 'iMovi',
    description: 'Landing Page',
    link: 'igormarines.github.io/LearningBootsTrap/',
    image: mobiliariaLandingPage,
    techs: ['HTML', 'CSS', 'BOOTSTRAP']
  },
  {
    name: 'Api de Filmes',
    description: 'Consumo de API ROCKETFLIX',
    link: 'igormarines.github.io/Rocketflix/',
    image: filmeAleatorio,
    techs: ['HTML', 'CSS', 'JAVASCRIPT']
  },
  {
    name: 'To-Do Simples',
    description: 'Lista de presença simples',
    link: 'react-rocketseat-todo-xdnr.vercel.app/',
    image: listaPresenca,
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACTJS']
  },
  {
    name: 'To-Do Mobile [ PROJETO PRIVADO ]',
    description: 'Presente de aniversário',
    link: '',
    image: todoMobile,
    techs: ['HTML', 'CSS', 'STYLED-COMPONENTS', 'REACT-NATIVE', '@EXPO/CLI', 'LocalStorage']
  }
];

const Portfolio = () => {
  const [selectedTech, setSelectedTech] = useState('');

  const filteredProjects = portfolio_projects.filter(project =>
    selectedTech === '' || project.techs.includes(selectedTech)
  );

  const allTechs = [...new Set(portfolio_projects.flatMap(project => project.techs))];

  return (
    <S.Body>
      <S.Container>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', backgroundColor: '#000' }}>
          <S.PortfolioText>
            <div style={{ paddingRight: 5 }}>
              <Logotipo />
            </div>
            Transformando ideias em realidade por meio da paixão pela criação e da busca constante pela excelência.
          </S.PortfolioText>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <S.SelectedTech value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
            <option value="">Todos</option>
            {allTechs.map((tech, index) => (
              <option key={index} value={tech}>{tech}</option>
            ))}
          </S.SelectedTech>
        </div>

        <S.CardsContainer>
          {filteredProjects.map((project, index) => (
            <S.Card key={index}>
              <Link to={`${index}`}>
                <S.CardImage src={project.image} alt={project.name} />
              </Link>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <ul>
                {project.techs.map((tech, index) => (
                  <li style={{ color: project.techs.includes('REACTJS') ? '#61DAFB' : (project.techs.includes('VUE') ? '#4FC08D' : 'red') }} key={index}>{tech}</li>
                ))}
              </ul>
            </S.Card>
          ))}
        </S.CardsContainer>
        <Footer />
      </S.Container>
    </S.Body>
  );
};

export default Portfolio;
