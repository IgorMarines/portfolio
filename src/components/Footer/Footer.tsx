import * as S from './styles'
import { useMediaQuery } from '@mui/material';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <S.Footer>
      <div>
        <span>&copy; {new Date().getFullYear()} Igor Marines. Todos os direitos reservados.</span>
      </div>
      <div>
        <a style={{color: isMobile ? '#fff' : '#000'}} href='/portfolio'>works</a>
      </div>
    </S.Footer>
  );
};

export default Footer;
