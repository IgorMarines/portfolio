import 'animate.css';
import * as S from './styles';
import sukuna from '../../assets/images/sukuna2.jpg';
import itadori from '../../assets/images/ena2.jpg';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

import curriculo from '../../assets/downloads/Curriculo.pdf';

const Content = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [userPhoto, setUserPhoto] = useState(false);

  return (
    <S.Body>
      <S.Border>
        <S.Container className="animate__slideInDown">
          <S.Left>
            <S.Name className="animate__animated animate__fadeIn animate__delay-1s">
              Oi,
            </S.Name>
            <S.Role className="animate__animated animate__fadeIn animate__delay-2s">
              Eu me chamo <a href="/about">Igor Marines</a>
            </S.Role>
            <S.Description className="animate__animated animate__fadeIn animate__delay-3s">
              Eu escrevo códigos com simplicidade e estilo.
            </S.Description>

            <S.ButtonContainer>
              <S.Button
                href="https://wa.me/5511954348405"
                target="_blank"
                className="animate__animated animate__fadeIn animate__delay-4s"
              >
                Fale Comigo
              </S.Button>
              <S.Button
                href={curriculo}
                download="Curriculo_Igor_Marines.pdf"
                $outlined
                className="animate__animated animate__fadeIn animate__delay-4s"
              >
                Baixar CV
              </S.Button>
            </S.ButtonContainer>
          </S.Left>

          <S.Right style={{ display: isMobile ? 'none' : 'flex' }}>
            <S.Image
              onClick={() => setUserPhoto(!userPhoto)}
              src={userPhoto ? itadori : sukuna}
              alt="User"
            />
          </S.Right>
        </S.Container>
      </S.Border>
    </S.Body>
  );
};

export default Content;
