import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import * as S from './styles';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <S.Header $isScrolled={isScrolled}>
      <S.Container>
        <S.Logo>
          <S.LogoText>Igor Marines</S.LogoText>
          <S.LogoSubtext>{t('hero.role')}</S.LogoSubtext>
        </S.Logo>
        
        <S.Navigation>
          <S.NavLink href="#home">
            <S.NavIcon>🏠</S.NavIcon>
            {t('nav.home')}
          </S.NavLink>
          <S.NavLink href="#sobre">
            <S.NavIcon>👨‍💻</S.NavIcon>
            {t('nav.about')}
          </S.NavLink>
          <S.NavLink href="#skills">
            <S.NavIcon>⚡</S.NavIcon>
            {t('nav.skills')}
          </S.NavLink>
          <S.NavLink href="#experiencia">
            <S.NavIcon>💼</S.NavIcon>
            {t('nav.experience')}
          </S.NavLink>
          <S.NavLink href="#projetos">
            <S.NavIcon>🎯</S.NavIcon>
            {t('nav.projects')}
          </S.NavLink>
          <S.NavLink href="#contato">
            <S.NavIcon>📧</S.NavIcon>
            {t('nav.contact')}
          </S.NavLink>
          
          <LanguageSwitch />
        </S.Navigation>
      </S.Container>
    </S.Header>
  );
};

export default Header;
