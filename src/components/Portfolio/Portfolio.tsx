import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as S from './styles';
import Footer from '../Footer/Footer.tsx';
import Logotipo from '../Header/home/index.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const portfolio_projects = [
  {
    name: 'Estágio',
    description: `Plataforma para personais`,
    link: 'www.quivon.com.br',
    image: 'https://cdn.greatpages.com.br/www.quivon.app/1701456960/imagens/desktop/297628_1_169324645464ece3f645b8c302761138.png',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACTJS', 'STYLED-COMPONENTS', 'REDUX', 'REDUX-SAGAS']
  },
  {
    name: 'Plataforma para cursos',
    description: 'Plataforma EAD',
    link: 'ignite-lab-react-mu-two.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/840680667842871306/1288486598882889778/image.png?ex=66f55c28&is=66f40aa8&hm=fb51107b701a4a5505d061f2c299477e0a46d2856a37e94e0249048f952adbab&',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'TYPESCRIPT']
  },
  {
    name: 'Bate Papo Global',
    description: 'Chat com amigos',
    link: 'bate-papo-global.vercel.app',
    image: 'https://media.discordapp.net/attachments/840680667842871306/1288487062567260190/image.png?ex=66f55c96&is=66f40b16&hm=a9f34913c503d9460d4a663cc6dde7b4e43f6ae442389b9e547375a5095f1a4f&=&format=webp&quality=lossless&width=1440&height=637',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS', 'TYPESCRIPT', 'STYLED-COMPONENTS', 'FIREBASE'],
  },
  {
    name: 'Clima360',
    description: 'Confira agora como está a temperatura de qualquer local do mundo!',
    link: 'clima360.vercel.app/',
    image: 'https://media.discordapp.net/attachments/840680667842871306/1288487298325024838/image.png?ex=66f55cce&is=66f40b4e&hm=7a9a96dda5223544d21d70e4089255fa5e3caff997275a6f7a4394da7be40e04&=&format=webp&quality=lossless&width=440&height=223',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'VUE'],
  },
  {
    name: 'Landing Page Cabelereiro',
    description: 'Landing Page para barbearia',
    link: 'https://whitelabel-profissional.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/840680667842871306/1288505940496351334/image.png?ex=66f56e2b&is=66f41cab&hm=27a3c5de8cc4c15ed6c52ccb10d8ea580938b1cd1db0f75beca0e24263580270&',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'REACTJS']
  },
  {
    name: 'iMovi',
    description: 'Landing Page',
    link: 'igormarines.github.io/LearningBootsTrap/',
    image: 'https://cdn.discordapp.com/attachments/840680667842871306/1288491490384810088/image.png?ex=66f560b6&is=66f40f36&hm=a76466b4c636ae51aae608113d6b7264e168b31d834093f059cce0f72a916078&',
    techs: ['HTML', 'CSS', 'BOOTSTRAP']
  },
  {
    name: 'Api de Filmes',
    description: 'Consumo de API ROCKETFLIX',
    link: 'igormarines.github.io/Rocketflix/',
    image: 'https://media.discordapp.net/attachments/840680667842871306/1288492297733800042/image.png?ex=66f56176&is=66f40ff6&hm=91bd5995649e0f638019d21d5f16a90a370957d995e1c2888f98715fdf9d35e5&=&format=webp&quality=lossless&',
    techs: ['HTML', 'CSS', 'JAVASCRIPT']
  },
  {
    name: 'To-Do Simples',
    description: 'Lista de presença simples',
    link: 'react-rocketseat-todo-xdnr.vercel.app/',
    image: 'https://media.discordapp.net/attachments/840680667842871306/1288489311158665308/image.png?ex=66f55eae&is=66f40d2e&hm=dd876a286fcb14e9eb2fa07a50ffed9398e07270a537a110838130ce8065df97&=&format=webp&quality=lossless&',
    techs: ['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACTJS']
  },
  {
    name: 'To-Do Mobile [ PROJETO PRIVADO ]',
    description: 'Presente de aniversário para minha Namorada',
    link: '',
    image: 'https://media.discordapp.net/attachments/1106000641039536188/1204031560836186122/image.png?ex=65d340c5&is=65c0cbc5&hm=e2b69f060250c5e81717314b4481fb3612a386e6825cd55d33829c67425ac286&=&format=webp&quality=lossless',
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
