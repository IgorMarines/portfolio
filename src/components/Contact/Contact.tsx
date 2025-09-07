import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import * as S from './styles';

const Contact = () => {
  const { t, language } = useLanguage();
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
    
    // Validar campos
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert(t('contact.form.fillFields') || 'Por favor, preencha todos os campos.');
      return;
    }
    
    // Montar mensagem para WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.

📧 Email: ${formData.email}
📋 Assunto: ${formData.subject}

💬 Mensagem:
${formData.message}

---
Enviado através do portfólio`;
    
    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número do WhatsApp (sem espaços, hífens ou caracteres especiais)
    const phoneNumber = '5511954348405';
    
    // Construir URL do WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Limpar formulário após envio
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Mostrar mensagem de sucesso
    alert(t('contact.form.success') || 'Redirecionando para o WhatsApp...');
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
          {t('contact.title')}
        </S.SectionTitle>
        
        <S.SectionSubtitle className="animate__animated animate__fadeInUp">
          {t('contact.subtitle')}
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
              <S.FormLabel htmlFor="name">{t('contact.form.name')}</S.FormLabel>
              <S.FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder={t('contact.form.placeholder.name') as string}
                required
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.FormLabel htmlFor="email">{t('contact.form.email')}</S.FormLabel>
              <S.FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t('contact.form.placeholder.email') as string}
                required
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.FormLabel htmlFor="subject">{t('contact.form.subject')}</S.FormLabel>
              <S.FormInput
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={t('contact.form.placeholder.subject') as string}
                required
              />
            </S.FormGroup>
            
            <S.FormGroup>
              <S.FormLabel htmlFor="message">{t('contact.form.message')}</S.FormLabel>
              <S.FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('contact.form.placeholder.message') as string}
                required
              />
            </S.FormGroup>
            
            <S.SubmitButton type="submit">
              📱 {t('contact.form.submit')} via WhatsApp
            </S.SubmitButton>
          </S.ContactForm>
        </S.ContactContent>
      </S.Container>
    </S.ContactSection>
  );
};

export default Contact;
