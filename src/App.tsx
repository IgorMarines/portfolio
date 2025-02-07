
import './App.css';
import * as S from './styles/Background';
import Section from './components/Section/Section';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useMediaQuery } from '@mui/material';

const App = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <S.Body style={{background: isMobile ? '#000' : '#111'}}>
      <Header/>
      <Section />
      <Footer/>
    </S.Body>
  );
};

export default App;
