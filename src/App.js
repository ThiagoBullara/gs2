import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './assets/css/style.css';

import Home from './components/Home.js';
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
        <Route path='/pagina2' element={<Pagina2/>}></Route>
        <Route path='/pagina3' element={<Pagina3/>}></Route>
        <Route path='/pagina4' element={<Pagina4/>}></Route>
        <Route path='/pagina5' element={<Pagina5/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;