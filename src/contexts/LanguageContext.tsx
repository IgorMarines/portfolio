import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[] | any;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.greeting': '👋 Olá, eu sou',
    'hero.name': 'Igor Marines',
    'hero.role': 'Desenvolvedor Full Stack',
    'hero.subtitle': 'JavaScript | ReactJS | Vue.js | PHP | Laravel | MySQL',
    'hero.location': 'São Paulo, São Paulo, Brasil',
    'hero.description': 'Desenvolvedor apaixonado por tecnologia com 23 anos, residente em São Paulo. Especializado em React, Vue.js, Laravel e tecnologias modernas. Cursando Análise e Desenvolvimento de Sistemas na UNIFATECIE.',
    'hero.summary': 'Minha paixão pela programação é impulsionada pela capacidade de resolver problemas e criar experiências inovadoras. Tenho experiência em tecnologias de front-end como HTML, CSS, JavaScript, React, Vue.js, TypeScript, MUI e Styled-Components. No back-end, trabalho com PHP, Laravel e Python.',
    'hero.button.contact': '💬 Vamos Conversar',
    'hero.button.cv': '📄 Download CV',
    'hero.scroll': 'Role para baixo',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor Apaixonado por Tecnologia',
    'about.description': 'Sou um desenvolvedor Full Stack com mais de 3 anos de experiência, especializado em criar soluções digitais inovadoras e eficientes. Minha paixão pela programação me impulsiona a estar sempre aprendendo e aplicando as melhores práticas do mercado.',
    'about.technologies': 'Tecnologias',
    'about.highlights': [
      'Desenvolvedor Full Stack com foco em React e Node.js',
      'Experiência em desenvolvimento de APIs RESTful e sistemas robustos',
      'Conhecimento sólido em bancos de dados SQL e NoSQL',
      'Implementação de soluções escaláveis e otimizadas',
      'Integração com sistemas de pagamento e APIs externas',
      'Metodologias ágeis e trabalho em equipe'
    ],
    
    // Stats
    'stats.experience': 'Anos de Experiência',
    'stats.projects': 'Projetos Concluídos',
    'stats.dedication': 'Dedicação',
    
    // Skills
    'skills.title': 'Minhas Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Ferramentas',
    'skills.soft': 'Soft Skills',
    'skills.frontend.list': ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Styled Components", "Material-UI", "Design Responsivo", "Git"],
    'skills.backend.list': ["Node.js", "Express", "APIs RESTful", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Autenticação", "JWT"],
    'skills.tools.list': ["VS Code", "Git", "GitHub", "npm", "Webpack", "Vite", "Docker", "Postman", "Figma"],
    'skills.soft.list': ["Resolução de Problemas", "Trabalho em Equipe", "Comunicação", "Aprendizado Contínuo", "Criatividade", "Pensamento Analítico"],
    
    // Experience
    'experience.title': 'Experiência Profissional',
    'experience.current': 'Atual',
    'experience.months': 'meses',
    'experience.year': 'ano',
    'experience.years': 'anos',
    'experience.modifique.title': 'Desenvolvedor Full Stack',
    'experience.modifique.period': 'março de 2025 - junho de 2025',
    'experience.modifique.duration': '4 meses',
    'experience.modifique.location': 'Sorocaba, São Paulo, Brasil',
    'experience.modifique.description': 'Atuei como desenvolvedor full stack no desenvolvimento de aplicações web modernas, colaborando em diversas frentes de projeto.',
    'experience.modifique.responsibilities': [
      'Criação de interfaces responsivas e interativas com React, Vue e EJS',
      'Integração de APIs RESTful e construção de fluxos completos de CRUD',
      'Implementação de autenticação, controle de acesso e painéis administrativos',
      'Integração com a API do Asaas para gestão de pagamentos, cobranças e assinaturas',
      'Otimização de queries e estruturação de banco de dados relacional e em nuvem'
    ],
    'experience.covenant.title': 'Desenvolvedor Full Stack',
    'experience.covenant.company': 'Covenant Technology',
    'experience.covenant.period': 'fevereiro de 2024 - setembro de 2024',
    'experience.covenant.duration': '8 meses',
    'experience.covenant.location': 'São Paulo, Brasil',
    'experience.covenant.description': 'Durante minha atuação na Covenant, tive a oportunidade de aprofundar meus conhecimentos em diversas tecnologias, aplicando-as em projetos que envolviam a criação de CRUDs robustos e a implementação de regras de negócio complexas.',
    'experience.covenant.highlights': [
      'Desenvolvimento com Python, Vue.js e Laravel priorizando a experiência do cliente',
      'Atuação direta com RPA (Robotic Process Automation), otimizando processos internos',
      'Interações constantes com clientes para entender necessidades e criar soluções personalizadas',
      'Colaboração com times utilizando Clean Architecture para aplicações escaláveis'
    ],
    'experience.quivon.title': 'Desenvolvedor Web Front-end',
    'experience.quivon.company': 'Quivon',
    'experience.quivon.period': 'junho de 2022 - julho de 2023',
    'experience.quivon.duration': '1 ano 2 meses',
    'experience.quivon.location': 'São Paulo, Brasil',
    'experience.quivon.description': 'Durante minha experiência como desenvolvedor front-end na Quivon, atuei em projetos inovadores e desafiadores, aplicando minhas habilidades técnicas para entregar soluções modernas e de alto impacto.',
    'experience.quivon.achievements': [
      'Desenvolvimento de interfaces envolventes, responsivas e amigáveis com ReactJS e TypeScript',
      'Colaboração próxima com a equipe de design, transformando conceitos em implementações funcionais',
      'Implementação de testes unitários, garantindo qualidade e performance do código',
      'Criação de sites otimizados e acessíveis para diferentes dispositivos e navegadores',
      'Utilização de Redux e Redux-Sagas para gerenciamento eficiente de estado',
      'Aplicação de boas práticas com Styled-Components para componentes reutilizáveis'
    ],
    
    // Education
    'education.title': 'Formação Acadêmica',
    'education.unifatecie.institution': 'Centro Universitário UniFatecie',
    'education.unifatecie.degree': 'Análise e Desenvolvimento de Sistemas',
    'education.unifatecie.period': 'setembro de 2024 - setembro de 2026',
    'education.unifatecie.status': 'Em andamento',
    
    // Projects
    'projects.title': 'Meus Projetos',
    'projects.viewProject': 'Ver Projeto',
    'projects.viewCode': 'Código',
    'projects.data': [
      {
        title: "Task Manager",
        description: "Sistema completo de gerenciamento de tarefas com interface moderna e responsiva. Inclui funcionalidades de CRUD, filtros avançados e dashboard interativo.",
        technologies: ["React", "TypeScript", "Styled Components", "Local Storage"]
      },
      {
        title: "Sistema de Advocacia",
        description: "Plataforma profissional para escritórios de advocacia com gestão de clientes, casos jurídicos e documentos. Interface intuitiva e segura.",
        technologies: ["React", "Node.js", "MySQL", "JWT", "Material-UI"]
      },
      {
        title: "Plataforma de Estudos",
        description: "Sistema educacional completo com cursos, aulas interativas e acompanhamento de progresso. Desenvolvido com foco na experiência do usuário.",
        technologies: ["React", "TypeScript", "Firebase", "Styled Components"]
      },
      {
        title: "Filme Aleatório",
        description: "Aplicação que sugere filmes aleatórios baseados nas preferências do usuário. Integração com APIs externas e design responsivo.",
        technologies: ["React", "API REST", "CSS3", "JavaScript"]
      },
      {
        title: "Informações Meteorológicas",
        description: "App de clima em tempo real com previsões detalhadas, mapas interativos e notificações personalizadas. Interface elegante e intuitiva.",
        technologies: ["React", "Weather API", "Geolocation", "Chart.js"]
      },
      {
        title: "Landing Page - Cabelos",
        description: "Landing page moderna para salão de beleza especializado em cuidados capilares. Design atrativo com animações e otimizada para conversões.",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
      }
    ],
    
    // Contact
    'contact.title': 'Vamos Trabalhar Juntos?',
    'contact.subtitle': 'Estou sempre interessado em novos projetos e oportunidades. Entre em contato comigo através dos canais abaixo ou envie uma mensagem!',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.submit': 'Enviar',
    'contact.form.success': 'Redirecionando para o WhatsApp...',
    'contact.form.fillFields': 'Por favor, preencha todos os campos.',
    'contact.form.placeholder.name': 'Seu nome completo',
    'contact.form.placeholder.email': 'igor.marines25@gmail.com',
    'contact.form.placeholder.subject': 'Assunto da mensagem',
    'contact.form.placeholder.message': 'Conte-me sobre seu projeto ou ideia...',
    
    // Footer
    'footer.description': 'Criando experiências digitais excepcionais com paixão e dedicação.',
    'footer.quicklinks': 'Links Rápidos',
    'footer.social': 'Redes Sociais',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.made': 'Feito com',
    'footer.tech': 'usando React & TypeScript',
    'footer.role': 'Desenvolvedor Full Stack',
    
    // Portfolio
    'portfolio.subtitle': 'Transformando ideias em realidade por meio da paixão pela criação e da busca constante pela excelência.',
    'portfolio.filter.all': 'Todos',
    'portfolio.techs.title': 'Tecnologias Usadas:',
    'portfolio.visit': 'Visitar Projeto',
    'portfolio.notfound': 'Projeto não encontrado.',
    'portfolio.noid': 'ID do projeto não fornecido.',
    // Scroll
    'scroll.top': 'Voltar ao topo',

  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': '👋 Hi, I am',
    'hero.name': 'Igor Marines',
    'hero.role': 'Full Stack Developer',
    'hero.subtitle': 'JavaScript | ReactJS | Vue.js | PHP | Laravel | MySQL',
    'hero.location': 'São Paulo, São Paulo, Brazil',
    'hero.description': 'Technology-passionate developer, 23 years old, based in São Paulo. Specialized in React, Vue.js, Laravel and modern technologies. Currently studying Systems Analysis and Development at UNIFATECIE.',
    'hero.summary': 'My passion for programming is driven by the ability to solve problems and create innovative experiences. I have experience in front-end technologies like HTML, CSS, JavaScript, React, Vue.js, TypeScript, MUI and Styled-Components. On the back-end, I work with PHP, Laravel and Python.',
    'hero.button.contact': '💬 Let\'s Talk',
    'hero.button.cv': '📄 Download CV',
    'hero.scroll': 'Scroll down',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Technology Passionate Developer',
    'about.description': 'I am a Full Stack developer with over 3 years of experience, specialized in creating innovative and efficient digital solutions. My passion for programming drives me to always be learning and applying the best market practices.',
    'about.technologies': 'Technologies',
    'about.highlights': [
      'Full Stack Developer focused on React and Node.js',
      'Experience in RESTful API development and robust systems',
      'Solid knowledge in SQL and NoSQL databases',
      'Implementation of scalable and optimized solutions',
      'Integration with payment systems and external APIs',
      'Agile methodologies and team collaboration'
    ],
    
    // Stats
    'stats.experience': 'Years of Experience',
    'stats.projects': 'Completed Projects',
    'stats.dedication': 'Dedication',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    'skills.soft': 'Soft Skills',
    'skills.frontend.list': ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Styled Components", "Material-UI", "Responsive Design", "Git"],
    'skills.backend.list': ["Node.js", "Express", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Authentication", "JWT"],
    'skills.tools.list': ["VS Code", "Git", "GitHub", "npm", "Webpack", "Vite", "Docker", "Postman", "Figma"],
    'skills.soft.list': ["Problem Solving", "Teamwork", "Communication", "Continuous Learning", "Creativity", "Analytical Thinking"],
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.current': 'Current',
    'experience.months': 'months',
    'experience.year': 'year',
    'experience.years': 'years',
    'experience.modifique.title': 'Full Stack Developer',
    'experience.modifique.period': 'March 2025 - June 2025',
    'experience.modifique.duration': '4 months',
    'experience.modifique.location': 'Sorocaba, São Paulo, Brazil',
    'experience.modifique.description': 'Worked as a full stack developer in modern web application development, collaborating across various project fronts.',
    'experience.modifique.responsibilities': [
      'Creation of responsive and interactive interfaces with React, Vue and EJS',
      'RESTful API integration and complete CRUD flow construction',
      'Implementation of authentication, access control and administrative panels',
      'Integration with Asaas API for payment, billing and subscription management',
      'Query optimization and relational and cloud database structuring'
    ],
    'experience.covenant.title': 'Full Stack Developer',
    'experience.covenant.company': 'Covenant Technology',
    'experience.covenant.period': 'February 2024 - September 2024',
    'experience.covenant.duration': '8 months',
    'experience.covenant.location': 'São Paulo, Brazil',
    'experience.covenant.description': 'During my tenure at Covenant, I had the opportunity to deepen my knowledge in various technologies, applying them to projects involving robust CRUD creation and complex business rule implementation.',
    'experience.covenant.highlights': [
      'Development with Python, Vue.js and Laravel prioritizing client experience',
      'Direct work with RPA (Robotic Process Automation), optimizing internal processes',
      'Constant client interactions to understand needs and create personalized solutions',
      'Collaboration with teams using Clean Architecture for scalable applications'
    ],
    'experience.quivon.title': 'Front-end Web Developer',
    'experience.quivon.company': 'Quivon',
    'experience.quivon.period': 'June 2022 - July 2023',
    'experience.quivon.duration': '1 year 2 months',
    'experience.quivon.location': 'São Paulo, Brazil',
    'experience.quivon.description': 'During my experience as a front-end developer at Quivon, I worked on innovative and challenging projects, applying my technical skills to deliver modern and high-impact solutions.',
    'experience.quivon.achievements': [
      'Development of engaging, responsive and user-friendly interfaces with ReactJS and TypeScript',
      'Close collaboration with design team, transforming concepts into functional implementations',
      'Implementation of unit tests, ensuring code quality and performance',
      'Creation of optimized and accessible websites for different devices and browsers',
      'Use of Redux and Redux-Sagas for efficient state management',
      'Application of best practices with Styled-Components for reusable components'
    ],
    
    // Education
    'education.title': 'Education',
    'education.unifatecie.institution': 'UniFatecie University Center',
    'education.unifatecie.degree': 'Systems Analysis and Development',
    'education.unifatecie.period': 'September 2024 - September 2026',
    'education.unifatecie.status': 'In progress',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.viewProject': 'View Project',
    'projects.viewCode': 'Code',
    'projects.data': [
      {
        title: "Task Manager",
        description: "Complete task management system with modern and responsive interface. Includes CRUD functionality, advanced filters and interactive dashboard.",
        technologies: ["React", "TypeScript", "Styled Components", "Local Storage"]
      },
      {
        title: "Law System",
        description: "Professional platform for law firms with client management, legal cases and documents. Intuitive and secure interface.",
        technologies: ["React", "Node.js", "MySQL", "JWT", "Material-UI"]
      },
      {
        title: "Study Platform",
        description: "Complete educational system with courses, interactive classes and progress tracking. Developed with focus on user experience.",
        technologies: ["React", "TypeScript", "Firebase", "Styled Components"]
      },
      {
        title: "Random Movie",
        description: "Application that suggests random movies based on user preferences. Integration with external APIs and responsive design.",
        technologies: ["React", "REST API", "CSS3", "JavaScript"]
      },
      {
        title: "Weather Information",
        description: "Real-time weather app with detailed forecasts, interactive maps and personalized notifications. Elegant and intuitive interface.",
        technologies: ["React", "Weather API", "Geolocation", "Chart.js"]
      },
      {
        title: "Landing Page - Hair",
        description: "Modern landing page for beauty salon specialized in hair care. Attractive design with animations and optimized for conversions.",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
      }
    ],
    
    // Contact
    'contact.title': 'Let\'s Work Together?',
    'contact.subtitle': 'I\'m always interested in new projects and opportunities. Contact me through the channels below or send me a message!',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Redirecting to WhatsApp...',
    'contact.form.fillFields': 'Please fill in all fields.',
    'contact.form.placeholder.name': 'Your full name',
    'contact.form.placeholder.email': 'igor.marines25@gmail.com',
    'contact.form.placeholder.subject': 'Message subject',
    'contact.form.placeholder.message': 'Tell me about your project or idea...',
    
    // Footer
    'footer.description': 'Creating exceptional digital experiences with passion and dedication.',
    'footer.quicklinks': 'Quick Links',
    'footer.social': 'Social Media',
    'footer.rights': 'All rights reserved.',
    'footer.made': 'Made with',
    'footer.tech': 'using React & TypeScript',
    'footer.role': 'Full Stack Developer',
    
    // Portfolio
    'portfolio.subtitle': 'Turning ideas into reality through passion for creation and constant pursuit of excellence.',
    'portfolio.filter.all': 'All',
    'portfolio.techs.title': 'Technologies Used:',
    'portfolio.visit': 'Visit Project',
    'portfolio.notfound': 'Project not found.',
    'portfolio.noid': 'Project ID not provided.',
     // Scroll
    'scroll.top': 'Back to top',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string | string[] | any => {
    const value = translations[language][key as keyof typeof translations['pt']];
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
