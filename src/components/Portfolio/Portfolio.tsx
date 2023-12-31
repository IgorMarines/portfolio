import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './styles';
import Footer from '../Footer/Footer.tsx';
import Logotipo from '../Header/home/index.tsx';
import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const portfolio_projects = [
  {
    name: 'Estágio',
    description: `Plataforma para personais`,
    link: 'www.quivon.com.br',
    image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138375944189513769/Captura_de_Tela_234.png',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'STYLED-COMPONENTS', 'REDUX', 'REDUX-SAGAS']
  },
  {
    name: 'Plataforma para cursos',
    description: 'Plataforma EAD',
    link: 'ignite-lab-react-mu-two.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138204792880115822/Captura_de_Tela_254.png?',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'TYPESCRIPT']
  },
  {
    name: 'iMovi',
    description: 'Landing Page',
    link: 'igormarines.github.io/LearningBootsTrap/',
    image: 'https://media.discordapp.net/attachments/1001887956568653975/1138367556080635915/image.png?',
    techs: ['HTML', 'CSS', 'BOOTSTRAP']
  },
  {
    name: 'Api de Filmes',
    description: 'Consumo de API ROCKETFLIX',
    link: 'igormarines.github.io/Rocketflix/',
    image: 'https://media.discordapp.net/attachments/1001887956568653975/1138376372142747708/image.png?',
    techs: ['HTML', 'CSS', 'JAVASCRIPT']
  },
  {
    name: 'To-Do Simples',
    description: 'Lista de presença simples',
    link: 'react-rocketseat-todo-xdnr.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/1106000641039536188/1164955151958823012/image.png?ex=65451808&is=6532a308&hm=ca04c07636b0ad9f1c7aff281960ed86f4c38d242f3ef24cbcd95b679a679d8a&',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT']
  },
  {
    name: 'Bate Papo Global',
    description: 'Chat com amigos',
    link: 'bate-papo-global.vercel.app',
    image: 'https://media.discordapp.net/attachments/840680667842871306/1167385976457400330/image.png?ex=654defe9&is=653b7ae9&hm=5979fc4dc0b36acd9c86be1057f1b5bcccf7d3506d468640f7cb1445e1e53067&',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'STYLED-COMPONENTS', 'FIREBASE'],
  }
];

const Portfolio = () => {
  const params = useParams();
  console.log(params);

  return (
    <S.Body>

      <S.Container>
        <div>
          <Logotipo />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <S.PortfolioText>
            Transformando ideias em realidade por meio da paixão pela criação e da busca constante pela excelência.
          </S.PortfolioText>
        </div>


        <S.CardsContainer>
          {portfolio_projects.map((project, index) => (
            <S.Card key={index} className={`animate__animated animate__fadeIn animate__delay-${index}s`}>
              <Link to={`${index}`}>
                <S.CardImage src={project.image} alt={project.name} />
              </Link>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <ul>
                {project.techs.map((tech, index) => (
                  <li key={index}>{tech}</li>
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
