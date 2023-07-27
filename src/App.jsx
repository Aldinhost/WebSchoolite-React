import {Route, Routes} from 'react-router-dom';

import Home from './pages/home/Home';
import Nosotros from './pages/nosotros/Nosotros';
import Admisiones from './pages/admisiones/Admisiones';
import Contacto from './pages/contacto/Contacto';
import Preescolar from './pages/ofertaEducativa/preescolar/Preescolar'
import Primaria from './pages/ofertaEducativa/primaria/Primaria';
import Secundaria from './pages/ofertaEducativa/secundaria/Secundaria';
import Preparatoria from './pages/ofertaEducativa/preparatoria/Preparatoria';
import Universidad from './pages/ofertaEducativa/universidad/Universidad';
import Ingles from './pages/ofertaEducativa/ingles/Ingles';
import FormNoticias from './components/formNoticias/FormNoticias';


import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/admisiones' element={<Admisiones/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/preescolar' element={<Preescolar/>} />
        <Route path='/primaria' element={<Primaria/>} />
        <Route path='/secundaria' element={<Secundaria/>} />
        <Route path='/preparatoria' element={<Preparatoria/>} />
        <Route path='/universidad' element={<Universidad/>} />
        <Route path='/ingles' element={<Ingles/>} />
        <Route path='/form-noticias' element={<FormNoticias/>} />
      </Routes>
    </div>
  )
}

export default App
