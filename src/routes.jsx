/* eslint-disable react/jsx-filename-extensions */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Menu from './components/Menu';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu>
        
      </Menu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
