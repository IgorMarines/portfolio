import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './styles';
import Footer from '../Footer/Footer.tsx';
import Logotipo from '../Header/home/index.tsx';
import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const portfolio_projects = [
  {
    name: 'Estágio',
    description: 'Experiência de estágio',
    link: 'www.quivon.com.br',
    image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138375944189513769/Captura_de_Tela_234.png',
    techs: ['#ReactJS', '#TypeScript', '#Styled-Components', '#Redux', '#Redux-Sagas']
  },
  {
    name: 'RocketSeat',
    description: 'Plataforma EAD',
    link: 'ignite-lab-react-mu-two.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138204792880115822/Captura_de_Tela_254.png?width=886&height=498',
    techs: ['#']
  },
  {
    name: 'iMovi',
    description: 'Landing Page',
    link: 'igormarines.github.io/LearningBootsTrap/',
    image: 'https://media.discordapp.net/attachments/1001887956568653975/1138367556080635915/image.png?width=886&height=498',
    techs: ['#HTML', '#CSS', '#BOOTSTRAP']
  },
  {
    name: 'Api',
    description: 'Consumo de API ROCKETFLIX',
    link: 'igormarines.github.io/API_GitHub/',
    image: 'https://media.discordapp.net/attachments/1001887956568653975/1138376372142747708/image.png?width=886&height=498',
    techs: ['#HTML', '#CSS', '#JAVASCRIPT']
  },
  {
    name: 'To-Do Simples',
    description: 'Lista de presença simples',
    link: 'https://react-rocketseat-todo-xdnr.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/1106000641039536188/1164955151958823012/image.png?ex=65451808&is=6532a308&hm=ca04c07636b0ad9f1c7aff281960ed86f4c38d242f3ef24cbcd95b679a679d8a&',
    techs: ['#ReactJS']
  },
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

        <Carousel autoPlay showThumbs={false} infiniteLoop width={'100%'}>

          {portfolio_projects.map((project, index) => (
            <div key={index}>
              {project.techs.map((tech) => (
                <p>{tech}</p>
              ))}


              <S.SlideWrapper>
                <Link to={`${index}`}>
                  <S.SlideImage src={project.image} alt={project.name} />
                </Link>
                <S.SlideText>{project.name}</S.SlideText>
                <S.SlideDescription>{project.description}</S.SlideDescription>
              </S.SlideWrapper>

            </div>
          ))}
        </Carousel>
        <Footer />
      </S.Container>
    </S.Body>
  );
};

export default Portfolio;
