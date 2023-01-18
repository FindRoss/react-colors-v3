import { BrowserRouter, Routes, Route } from "react-router-dom";

// Tutorial: https://www.youtube.com/watch?v=bml92jhF4t8

import './App.css';
import Header from './components/Header/Index';
import Home from './components/Home/Home';
import Palette from './components/Palette/Palette';

import Container from '@mui/material/Container';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="md">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/palette/:id" element={<Palette />}></Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
