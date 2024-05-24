import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Afaculdade from './pages/Afaculdade'
/*import Noticias from './pages/Noticias'*/
import DpoLgpd from './pages/DpoLgpd'
import Inicial from './pages/Inicial'
import Navbar from './components/Navbar'
import VisualizaNoticia from './pages/VisualizaNoticia'
import NoticiasAxios from './pages/NoticiasAxios'

const App = () => {
  return (
    
    <BrowserRouter>
      <div className='navbar-container'>
        <img src='uniesp.png' width={50} height={50}/>
        <Navbar/>
      </div>
      <h1>Título da página</h1>
      <div className="routes-container">
        <Routes>
            <Route path='/' element={<Inicial/>} />
            <Route path='/a-faculdade' element={<Afaculdade/>} />
            <Route path='/noticias' element={<NoticiasAxios/>} />
            <Route path='/dpo-lgpd' element={<DpoLgpd/>} />
            <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App