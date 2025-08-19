
import './App.css';
import * as S from './styles/Background';
import Section from './components/Section/Section';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import About from './components/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <S.Body>
      <S.BackgroundOverlay />
      <S.AnimatedBackground />
      <Header />
      <Section />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </S.Body>
  );
};

export default App;
