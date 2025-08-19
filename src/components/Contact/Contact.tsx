import { useState } from 'react';
import * as S from './styles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de envio do formulário
    console.log('Form submitted:', formData);
    // Aqui você pode integrar com um serviço de email como EmailJS
    alert('Mensagem enviada! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'E-mail',
      value: 'igor.marines@email.com',
      href: 'mailto:igor.marines@email.com'
    },
    {
      icon: '📱',
      label: 'WhatsApp',
      value: '+55 (11) 95434-8405',
      href: 'https://wa.me/5511954348405'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/igor-marines',
      href: 'https://linkedin.com/in/igor-marines'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/IgorMarines',
      href: 'https://github.com/IgorMarines'
    }
  ];

  return (
    <S.ContactSection id="contato">
      <S.Container>
        <S.SectionTitle className="animate__animated animate__fadeInUp">
          Vamos Trabalhar Juntos?
        </S.SectionTitle>
        
        <S.SectionSubtitle className="animate__animated animate__fadeInUp">
          Estou sempre interessado em novos projetos e oportunidades. 
          Entre em contato comigo através dos canais abaixo ou envie uma mensagem!
        </S.SectionSubtitle>
        
        <S.ContactContent>
          <S.ContactInfo className="animate__animated animate__fadeInLeft">
            {contactInfo.map((contact, index) => (
              <S.ContactCard key={contact.label}>
                <S.ContactItem 
                  href={contact.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <S.ContactIcon>{contact.icon}</S.ContactIcon>
                  <S.ContactText>
                    <S.ContactLabel>{contact.label}</S.ContactLabel>
                    <S.ContactValue>{contact.value}</S.ContactValue>
                  </S.ContactText>
                </S.ContactItem>
              </S.ContactCard>
            ))}
          </S.ContactInfo>
          
          <S.ContactForm 
            onSubmit={handleSubmit}
            className="animate__animated animate__fadeInRight"
          >
            <S.FormGroup>
              <S.FormLabel htmlFor="name">Nome</S.FormLabel>
              <S.FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.FormLabel htmlFor="email">E-mail</S.FormLabel>
              <S.FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="seu.email@exemplo.com"
                required
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.FormLabel htmlFor="subject">Assunto</S.FormLabel>
              <S.FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Assunto da mensagem"
                required
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.FormLabel htmlFor="message">Mensagem</S.FormLabel>
              <S.FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Conte-me sobre seu projeto ou ideia..."
                required
              />
            </S.FormGroup>
            
            <S.SubmitButton type="submit">
              Enviar Mensagem
            </S.SubmitButton>
          </S.ContactForm>
        </S.ContactContent>
      </S.Container>
    </S.ContactSection>
  );
};

export default Contact;
