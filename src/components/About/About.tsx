import Logotipo from '../Header/logotipo';
import * as S from './styles';
import 'animate.css';

const About = () => {
    return (
        <S.Body>

            <S.Container>
                <Logotipo />
                <h2 className='animate__animated animate__fadeIn animate__delay-1s'>Sobre Mim</h2>
                <p className='animate__animated animate__fadeIn animate__delay-2s'>Olá, sou o Igor, um desenvolvedor front-end apaixonado por criar experiências digitais cativantes e funcionais. Com mais de um ano de experiência no mundo do desenvolvimento, tenho me dedicado a trazer ideias à vida por meio do poder do código.</p>
            </S.Container>
        </S.Body>
    );
};

export default About;
