import {Route, Routes} from 'react-router-dom';

import { 
  Home, 
  Nosotros, 
  Admisiones, 
  Contacto, 
  Preescolar, 
  Primaria, 
  Secundaria, 
  Preparatoria, 
  Universidad, 
  Ingles, 
  FormNoticias} from './pages';



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
