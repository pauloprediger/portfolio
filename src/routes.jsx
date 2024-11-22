/* eslint-disable react/jsx-filename-extensions */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/aboutMe';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import PaginaPadrao from './components/PaginaPadrao';
import Post from './pages/Post';
import NaoEncontrada from './pages/NaoEncontrada';
import ScrollToTop from './components/ScrollToTop';

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Home />} />
          <Route path="aboutMe" element={<AboutMe />} />      
        </Route>
        <Route path="post/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
