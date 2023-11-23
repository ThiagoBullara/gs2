import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './assets/css/style.css';

import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Pagina2 from './components/Pagina2.js';
import Pagina3 from "./components/Pagina3.js";
import Pagina4 from "./components/Pagina4.js";
import Pagina5 from "./components/Pagina5.js";

import Menu from "./components/Menu.js";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mortalidade-infantil' element={<Pagina2/>}></Route>
        <Route path='/doencas-transmissiveis' element={<Pagina3/>}></Route>
        <Route path='/doencas-nao-transmissiveis' element={<Pagina4/>}></Route>
        <Route path='/melhoria-da-saude' element={<Pagina5/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;