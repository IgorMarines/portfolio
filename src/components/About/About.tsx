import Home from '../Header/home';
import * as S from './styles';
import 'animate.css';

const About = () => {
    return (
        <S.Body>
            <S.Container>
                <Home />
                <S.SectionTitle className="animate__animated animate__fadeIn animate__delay-1s">
                    Sobre Mim
                </S.SectionTitle>

                <S.IntroText className="animate__animated animate__fadeIn animate__delay-2s">
                    Olá! Sou o Igor, desenvolvedor Full Stack com mais de dois anos de experiência em tecnologias
                    front-end e back-end. Tenho afinidade com React.js e Vue.js, e habilidades em PHP e Laravel.
                    Gosto de trabalhar em projetos que trazem soluções práticas e impactantes.
                </S.IntroText>

                {/* Seção de Competências */}
                <S.SkillsSection className="animate__animated animate__fadeIn animate__delay-2s">
                    <h3>Principais Competências</h3>
                    <S.SkillList>
                        <S.SkillItem color="#f16529"><strong>HTML:</strong> Estruturação de páginas web</S.SkillItem>
                        <S.SkillItem color="#264de4"><strong>CSS:</strong> Estilização de interfaces</S.SkillItem>
                        <S.SkillItem color="#f7df1e"><strong>JavaScript:</strong> Funcionalidades interativas</S.SkillItem>
                        <S.SkillItem color="#61dbfb"><strong>React.js:</strong> Interfaces reativas e dinâmicas</S.SkillItem>
                        <S.SkillItem color="#4fc08d"><strong>Vue.js:</strong> Desenvolvimento de SPAs leves</S.SkillItem>
                        <S.SkillItem color="#3178c6"><strong>TypeScript:</strong> Tipagem avançada para segurança</S.SkillItem>
                        <S.SkillItem color="#8892BF"><strong>PHP:</strong> Backend poderoso</S.SkillItem>
                        <S.SkillItem color="#FF2D20"><strong>Laravel:</strong> Framework robusto para PHP</S.SkillItem>
                        <S.SkillItem color="#00758f"><strong>MySQL:</strong> Banco de dados relacional</S.SkillItem>
                    </S.SkillList>
                </S.SkillsSection>

                {/* Seção de Experiência Profissional */}
                <S.ExperienceSection className="animate__animated animate__fadeIn animate__delay-3s">
                    <h3>Experiência Profissional</h3>
                    <S.Experience>
                        <S.CompanyName>Modifique — Remoto (Ribeirão Preto, SP)</S.CompanyName>
                        <S.Position>Desenvolvedor Full Stack (mar. 2025 - jun. 2025)</S.Position>
                        <ul>
                            <li>Criação de interfaces responsivas com <strong>React.js</strong>, <strong>Vue.js</strong> e <strong>EJS</strong>.</li>
                            <li>Integração de APIs RESTful, construção de fluxos completos de CRUD e autenticação.</li>
                            <li>Implementação de sistemas administrativos e controle de acesso.</li>
                            <li>Integração com a <strong>API do Asaas</strong> para pagamentos e cobranças.</li>
                            <li>Otimização de queries e estruturação de bancos relacionais e cloud (MySQL, PostgreSQL, Supabase).</li>
                        </ul>
                    </S.Experience>
                    <S.Experience>
                        <S.CompanyName>Covenant Technology — São Paulo, SP</S.CompanyName>
                        <S.Position>Desenvolvedor Full Stack (fev. 2024 - set. 2024)</S.Position>
                        <ul>
                            <li>Desenvolvimento de aplicações web com Vue.js no front-end e Laravel no back-end.</li>
                            <li>Implementação de CRUDs e automação de processos com RPA.</li>
                            <li>Colaboração com equipes usando Clean Architecture para escalabilidade e manutenção.</li>
                        </ul>
                    </S.Experience>
                    <S.Experience>
                        <S.CompanyName>Quivon — São Paulo, SP</S.CompanyName>
                        <S.Position>Desenvolvedor Web Front End (jun. 2022 - jul. 2023)</S.Position>
                        <ul>
                            <li>Criação de interfaces com React.js, TypeScript, Redux, e Styled-Components.</li>
                            <li>Trabalho direto com design para traduções funcionais e acessíveis.</li>
                            <li>Implementação de testes unitários para garantir qualidade e estabilidade.</li>
                        </ul>
                    </S.Experience>
                </S.ExperienceSection>

                {/* Seção de Contato */}
                <S.ContactSection className="animate__animated animate__fadeIn animate__delay-4s">
                    <h3>Contato</h3>
                    <p>Email: igor.marines25@gmail.com</p>
                    <p>Telefone: (11) 95434-8405</p>
                    <S.Links>
                        <a href="https://www.linkedin.com/in/igormarines" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/igormarines" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://portfolio-igormarines.vercel.app" target="_blank" rel="noopener noreferrer">Portfólio</a>
                    </S.Links>
                </S.ContactSection>
            </S.Container>
        </S.Body>
    );
};

export default About;
