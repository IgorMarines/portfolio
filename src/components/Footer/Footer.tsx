import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <div>
        <span>&copy; {new Date().getFullYear()} Igor Marines. Todos os direitos reservados.</span>
      </div>
    </S.Footer>
  );
};

export default Footer;
