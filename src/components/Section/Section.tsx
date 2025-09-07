import { useEffect, useState } from 'react';
import 'animate.css';
import * as S from './styles';
import sukuna from '../../assets/images/professional_selfie.png';
import { useMobile } from '../../hooks/useMediaQuery';
import curriculo from '../../assets/downloads/Curriculo.pdf';

const Content = () => {
  const isMobile = useMobile();
  const [typedText, setTypedText] = useState('');
  const fullText = 'Desenvolvedor Full Stack';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.HeroSection id="home">
      <S.Container>
        <S.Content>
          <S.TextContent>
            <S.Greeting className="animate__animated animate__fadeInDown">
              👋 Olá, eu sou
            </S.Greeting>
            
            <S.Name className="animate__animated animate__fadeInLeft animate__delay-1s">
              Igor Marines
            </S.Name>
            
            <S.Role className="animate__animated animate__fadeInLeft animate__delay-2s">
              <S.TypedText>{typedText}</S.TypedText>
              <S.Cursor>|</S.Cursor>
            </S.Role>
            
            <S.Description className="animate__animated animate__fadeInUp animate__delay-3s">
              Transformo ideias em experiências digitais incríveis. 
              Especializado em React, TypeScript e desenvolvimento moderno.
            </S.Description>

            <S.Stats className="animate__animated animate__fadeInUp animate__delay-4s">
              <S.Stat>
                <S.StatNumber>3+</S.StatNumber>
                <S.StatLabel>Anos de Experiência</S.StatLabel>
              </S.Stat>
              <S.Stat>
                <S.StatNumber>50+</S.StatNumber>
                <S.StatLabel>Projetos Concluídos</S.StatLabel>
              </S.Stat>
              <S.Stat>
                <S.StatNumber>100%</S.StatNumber>
                <S.StatLabel>Dedicação</S.StatLabel>
              </S.Stat>
            </S.Stats>

            <S.ButtonContainer className="animate__animated animate__fadeInUp animate__delay-5s">
              <S.PrimaryButton
                href="https://wa.me/5511954348405"
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.ButtonIcon>💬</S.ButtonIcon>
                Vamos Conversar
              </S.PrimaryButton>
              
              <S.SecondaryButton
                href={curriculo}
                download="Curriculo_Igor_Marines.pdf"
              >
                <S.ButtonIcon>📄</S.ButtonIcon>
                Download CV
              </S.SecondaryButton>
            </S.ButtonContainer>

            <S.SocialLinks className="animate__animated animate__fadeInUp animate__delay-6s">
              <S.SocialLink href="https://github.com/IgorMarines" target="_blank">
                <S.SocialIcon>🐙</S.SocialIcon>
              </S.SocialLink>
              <S.SocialLink href="https://linkedin.com/in/igormarines" target="_blank">
                <S.SocialIcon>💼</S.SocialIcon>
              </S.SocialLink>
              <S.SocialLink href="mailto:igor@example.com">
                <S.SocialIcon>✉️</S.SocialIcon>
              </S.SocialLink>
            </S.SocialLinks>
          </S.TextContent>

          {!isMobile && (
            <S.ImageContent className="animate__animated animate__fadeInRight animate__delay-2s">
              <S.ImageContainer>
                <S.ImageGlow />
                <S.ProfileImage src={sukuna} alt="Igor Marines" />
                <S.FloatingElement $position="top-left">💻</S.FloatingElement>
                <S.FloatingElement $position="top-right">🚀</S.FloatingElement>
                <S.FloatingElement $position="bottom-left">⚡</S.FloatingElement>
                <S.FloatingElement $position="bottom-right">✨</S.FloatingElement>
              </S.ImageContainer>
            </S.ImageContent>
          )}
        </S.Content>

        <S.ScrollIndicator>
          <S.ScrollText>Role para baixo</S.ScrollText>
          <S.ScrollArrow>↓</S.ScrollArrow>
        </S.ScrollIndicator>
      </S.Container>
    </S.HeroSection>
  );
};

export default Content;