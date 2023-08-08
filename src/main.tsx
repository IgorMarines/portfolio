import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import About from './components/About/About.tsx';
import Portfolio from './components/Portfolio/Portfolio.tsx';

import './index.css';

const Root = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
    </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
