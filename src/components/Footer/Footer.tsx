import * as S from './styles'
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <S.Footer>
      <S.Container>
        <S.Content>
          <S.Left>
            <S.Logo>
              <S.LogoText>Igor Marines</S.LogoText>
              <S.LogoSubtext>{t('footer.role')}</S.LogoSubtext>
            </S.Logo>
            <S.Description>
              {t('footer.description')}
            </S.Description>
          </S.Left>
          
          <S.Right>
            <S.QuickLinks>
              <S.QuickLinkTitle>{t('footer.quicklinks')}</S.QuickLinkTitle>
              <S.QuickLink href="#home">{t('nav.home')}</S.QuickLink>
              <S.QuickLink href="#skills">{t('nav.skills')}</S.QuickLink>
              <S.QuickLink href="#projetos">{t('nav.projects')}</S.QuickLink>
              <S.QuickLink href="#contato">{t('nav.contact')}</S.QuickLink>
            </S.QuickLinks>
            
            <S.SocialLinks>
              <S.SocialLinkTitle>{t('footer.social')}</S.SocialLinkTitle>
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
            &copy; {currentYear} Igor Marines. {t('footer.rights')}
          </S.Copyright>
          <S.MadeWith>
            {t('footer.made')} <S.Heart>❤️</S.Heart> {t('footer.tech')}
          </S.MadeWith>
        </S.Bottom>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
