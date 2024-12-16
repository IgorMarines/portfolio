
import * as S from './styles';
// Variáveis para temas e estilos
const COLORS = {
  primary: '#fff',
  hover: '#61dafb',
  background: '#000',
};

const Header = () => {

  return (
    <S.Header style={{ width: '100%' }}>
      <div>
        <S.Link_Container>
          <a
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: '1.2em',
              transition: 'color 0.3s ease',
            }}
            href="/about"
          >
            SOBRE
          </a>
        </S.Link_Container>
      </div>
      <div>
        <S.Link_Container>
          <a
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: '1.2em',
              transition: 'color 0.3s ease',
            }}
            href="/portfolio"
          >
            PROJETOS
          </a>
        </S.Link_Container>
      </div>
    </S.Header>
  );
};

export default Header;
