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
    description: `
    Desenvolvedor web front end
    Tecnologias: ReactJS, TypeScript, Redux, Redux Sagas, Styled-Components.
    Como desenvolvedor front-end na Quivon, tive a oportunidade de contribuir para projetos inovadores e desafiadores, utilizando minhas habilidades em programação para criar soluções eficazes e impactantes. Durante meu tempo nesta empresa dinâmica, conquistei uma série de realizações significativas:
    
    Desenvolvimento de interfaces de usuário envolventes e amigáveis, utilizando tecnologias modernas como React e TypeScript.
    Colaboração estreita com a equipe de design, convertendo conceitos criativos em implementações práticas e funcionais.
    Implementação de testes unitários para garantir a qualidade e a estabilidade do código, resultando em uma experiência do usuário aprimorada.
    Contribuição para a criação de sites responsivos e otimizados, melhorando a acessibilidade e a usabilidade para diferentes dispositivos e plataformas.Tecnologias: ReactJS, TypeScript, Redux, Redux Sagas, Styled-Components. Como desenvolvedor front-end na Quivon, tive a oportunidade de contribuir para projetos inovadores e desafiadores, utilizando minhas habilidades em programação para criar soluções eficazes e impactantes. Durante meu tempo nesta empresa dinâmica, conquistei uma série de realizações significativas: Desenvolvimento de interfaces de usuário envolventes e amigáveis, utilizando tecnologias modernas como React e TypeScript. Colaboração estreita com a equipe de design, convertendo conceitos criativos em implementações práticas e funcionais. Implementação de testes unitários para garantir a qualidade e a estabilidade do código, resultando em uma experiência do usuário aprimorada. Contribuição para a criação de sites responsivos e otimizados, melhorando a acessibilidade e a usabilidade para diferentes dispositivos e plataformas.
    Competências: SQLite · Python · Cypress.io · React.js · TypeScript · JavaScript`,
    link: 'www.quivon.com.br',
    image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138375944189513769/Captura_de_Tela_234.png',
    techs: ['#ReactJS', '#TypeScript', '#Styled-Components', '#Redux', '#Redux-Sagas']
  },
  {
    name: 'Plataforma para cursos',
    description: 'Plataforma EAD',
    link: 'www.ignite-lab-react-mu-two.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138204792880115822/Captura_de_Tela_254.png?',
    techs: ['#']
  },
  {
    name: 'iMovi',
    description: 'Landing Page',
    link: 'www.igormarines.github.io/LearningBootsTrap/',
    image: 'https://media.discordapp.net/attachments/1001887956568653975/1138367556080635915/image.png?',
    techs: ['#HTML', '#CSS', '#BOOTSTRAP']
  },
  {
    name: 'Api de Filmes',
    description: 'Consumo de API ROCKETFLIX',
    link: 'www.igormarines.github.io/API_GitHub/',
    image: 'https://media.discordapp.net/attachments/1001887956568653975/1138376372142747708/image.png?',
    techs: ['#HTML', '#CSS', '#JAVASCRIPT']
  },
  {
    name: 'To-Do Simples',
    description: 'Lista de presença simples',
    link: 'www.react-rocketseat-todo-xdnr.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/1106000641039536188/1164955151958823012/image.png?ex=65451808&is=6532a308&hm=ca04c07636b0ad9f1c7aff281960ed86f4c38d242f3ef24cbcd95b679a679d8a&',
    techs: ['#ReactJS']
  },
  {
    name: 'Bate-Papo-Global',
    description: 'Chat com amigos',
    link: 'bate-papo-global.vercel.app',
    image: 'https://media.discordapp.net/attachments/840680667842871306/1167385976457400330/image.png?ex=654defe9&is=653b7ae9&hm=5979fc4dc0b36acd9c86be1057f1b5bcccf7d3506d468640f7cb1445e1e53067&',
    techs: ['#ReactJS', '#Styled-Components', '#Firebase'],
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
