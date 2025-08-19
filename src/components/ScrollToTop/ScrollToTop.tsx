import { useState, useEffect } from 'react';
import * as S from './styles';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      aria-label="Voltar ao topo"
    >
      ⬆️
    </S.ScrollToTopButton>
  );
};

export default ScrollToTop;
