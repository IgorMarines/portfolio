import * as S from './styles'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <S.Footer>
      <S.Container>
        <S.Content>
          <S.Left>
            <S.Logo>
              <S.LogoText>Igor Marines</S.LogoText>
              <S.LogoSubtext>Desenvolvedor Full Stack</S.LogoSubtext>
            </S.Logo>
            <S.Description>
              Criando experiências digitais excepcionais com paixão e dedicação.
            </S.Description>
          </S.Left>
          
          <S.Right>
            <S.QuickLinks>
              <S.QuickLinkTitle>Links Rápidos</S.QuickLinkTitle>
              <S.QuickLink href="#home">Início</S.QuickLink>
              <S.QuickLink href="#skills">Habilidades</S.QuickLink>
              <S.QuickLink href="#projetos">Projetos</S.QuickLink>
              <S.QuickLink href="#contato">Contato</S.QuickLink>
            </S.QuickLinks>
            
            <S.SocialLinks>
              <S.SocialLinkTitle>Redes Sociais</S.SocialLinkTitle>
              <S.SocialLinkGroup>
                <S.SocialLink href="https://github.com/IgorMarines" target="_blank" rel="noopener noreferrer">
                  <S.SocialIcon>🐙</S.SocialIcon>
                  GitHub
                </S.SocialLink>
                <S.SocialLink href="https://linkedin.com/in/igor-marines" target="_blank" rel="noopener noreferrer">
                  <S.SocialIcon>💼</S.SocialIcon>
                  LinkedIn
                </S.SocialLink>
                <S.SocialLink href="mailto:igor@example.com">
                  <S.SocialIcon>✉️</S.SocialIcon>
                  Email
                </S.SocialLink>
              </S.SocialLinkGroup>
            </S.SocialLinks>
          </S.Right>
        </S.Content>
        
        <S.Divider />
        
        <S.Bottom>
          <S.Copyright>
            &copy; {currentYear} Igor Marines. Todos os direitos reservados.
          </S.Copyright>
          <S.MadeWith>
            Feito com <S.Heart>❤️</S.Heart> usando React & TypeScript
          </S.MadeWith>
        </S.Bottom>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
