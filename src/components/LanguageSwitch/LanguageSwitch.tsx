import * as S from './styles';
import { useLanguage } from '../../contexts/LanguageContext';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <S.LanguageSwitch>
      <S.LanguageButton
        $active={language === 'pt'}
        onClick={() => setLanguage('pt')}
        aria-label="Português"
      >
        <S.FlagIcon>🇧🇷</S.FlagIcon>
        PT
      </S.LanguageButton>
      
      <S.LanguageButton
        $active={language === 'en'}
        onClick={() => setLanguage('en')}
        aria-label="English"
      >
        <S.FlagIcon>🇺🇸</S.FlagIcon>
        EN
      </S.LanguageButton>
    </S.LanguageSwitch>
  );
};

export default LanguageSwitch;
