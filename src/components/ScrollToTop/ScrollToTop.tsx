import { useState, useEffect } from 'react';
import * as S from './styles';
import { useLanguage } from '../../contexts/LanguageContext';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <S.ScrollToTopButton 
      $visible={isVisible} 
      onClick={scrollToTop}
      aria-label={t('scroll.top') as string}
    >
      ⬆️
    </S.ScrollToTopButton>
  );
};

export default ScrollToTop;
