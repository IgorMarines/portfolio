import 'animate.css';
import * as S from './styles'
import ena from '../../assets/images/ena.png'
import { useMediaQuery } from '@mui/material';

const Content = () => {

  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <S.Body>
      <S.Border>
        <S.Container className='animate__slideInDown'>
          <S.Left style={{width: isMobile ? '90%' : '30%'}}>
            <S.Name className="animate__animated animate__fadeIn animate__delay-1s">Oi,</S.Name>
            <S.Role className="animate__animated animate__fadeIn animate__delay-2s">Sou o <a href='/about'>Igor Marines</a></S.Role>
            <S.Description className="animate__animated animate__fadeIn animate__delay-3s">Eu escrevo códigos com simplicidade e estilo.</S.Description>
          </S.Left>
          <S.Right style={{display: isMobile ? 'none' : 'flex'}}>
            <img className="animate__animated animate__fadeIn animate__delay-4s" src={ena} alt="" />
          </S.Right>
        </S.Container>
      </S.Border>
    </S.Body>
  );
};

export default Content;
