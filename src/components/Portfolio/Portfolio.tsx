import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './styles'; // Importe seus estilos do arquivo 'styles.js'
import Footer from '../Footer/Footer.tsx';
import Logotipo from '../Header/logotipo/index.tsx';

const Portfolio = () => {
  const portfolio_projects = [
    {
      name: 'Estágio',
      description: 'Experiência de estágio',
      image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138375944189513769/Captura_de_Tela_234.png',
    },
    {
      name: 'RocketSeat',
      description: 'Plataforma EAD',
      image: 'https://cdn.discordapp.com/attachments/1001887956568653975/1138204792880115822/Captura_de_Tela_254.png?width=886&height=498',

    },
    {
      name: 'iMovi',
      description: 'Landing Page',
      image: 'https://media.discordapp.net/attachments/1001887956568653975/1138367556080635915/image.png?width=886&height=498',

    },
    {
      name: 'Api',
      description: 'Consumo de API ROCKETFLIX',
      image: 'https://media.discordapp.net/attachments/1001887956568653975/1138376372142747708/image.png?width=886&height=498',

    },

  ];

  return (
    <S.Body>

      <S.Container>
        <div>
          <Logotipo />
        </div>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
          <S.PortfolioText>
          Transformando ideias em realidade por meio da paixão pela criação e da busca constante pela excelência.
          </S.PortfolioText>
        </div>
        <Carousel autoPlay infiniteLoop showStatus={false} width={'100%'} centerMode>
          {portfolio_projects.map((project, index) => (
            <div key={index}>
              <S.SlideWrapper>
                <S.SlideImage src={project.image} alt={project.name} />
                <S.SlideText>{project.name}</S.SlideText>
                <S.SlideDescription>{project.description}</S.SlideDescription>
              </S.SlideWrapper>
            </div>
          ))}
        </Carousel>
      </S.Container>
      <Footer />
    </S.Body>
  );
};

export default Portfolio;
