import 'animate.css';
import * as S from './styles'
import sukuna from '../../assets/images/sukuna2.jpg'
import itadori from '../../assets/images/ena2.jpg'
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

const Content = () => {

  const isMobile = useMediaQuery('(max-width:600px)');
  const [userPhoto, setUserPhoto] = useState(false)

  return (
    <S.Body>
      <S.Border>
        <S.Container className='animate__slideInDown'>
          <S.Left style={{ width: isMobile ? '90%' : '30%' }}>
            <S.Name className="animate__animated animate__fadeIn animate__delay-1s">Oi,</S.Name>
            <S.Role className="animate__animated animate__fadeIn animate__delay-2s">Eu me chamo <a href='/about'>Igor Marines</a></S.Role>
            <S.Description className="animate__animated animate__fadeIn animate__delay-3s">Eu escrevo códigos com simplicidade e estilo.
              <a style={{ color: '#000', display: 'block', background: '#fff', textDecoration: 'none', width: 200, borderRadius: 5, marginTop: 15, padding: '5px 5px', textAlign: 'center' }} href="https://wa.me/5511954348405" target='_blank'> Fale Comigo</a></S.Description>
          </S.Left>
          <S.Right style={{ display: isMobile ? 'none' : 'flex' }}>
            <img className="animate__animated animate__fadeIn animate__delay-4s" style={{ borderRadius: '100%' }} onClick={() => setUserPhoto(!userPhoto)} src={userPhoto ? itadori : sukuna} alt="" />
          </S.Right>
        </S.Container>
      </S.Border>
    </S.Body>
  );
};

export default Content;
