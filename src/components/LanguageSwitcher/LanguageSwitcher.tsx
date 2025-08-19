import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <S.LanguageSwitcher>
      <S.LanguageButton 
        $active={language === 'pt'} 
        onClick={() => setLanguage('pt')}
        aria-label="Português"
      >
        PT
      </S.LanguageButton>
      <S.LanguageButton 
        $active={language === 'en'} 
        onClick={() => setLanguage('en')}
        aria-label="English"
      >
        EN
      </S.LanguageButton>
    </S.LanguageSwitcher>
  );
};

export default LanguageSwitcher;
