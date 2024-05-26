import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Afaculdade from './pages/Afaculdade'
import DpoLgpd from './pages/DpoLgpd'
import Inicial from './pages/Inicial'
import Navbar from './components/Navbar'
import VisualizaNoticia from './pages/VisualizaNoticia'
import NoticiasAxios from './pages/NoticiasAxios'
import AdminNoticias from './pages/admin/AdminNoticias'

const App = () => {
  return (
    
    <BrowserRouter>
      <div className='navbar-container'>
        <img src='uniesp.png' width={50} height={50}/>
        <Navbar/>
      </div>
      <div className="routes-container">
        <Routes>
            <Route path='/' element={<Inicial/>} />
            <Route path='/a-faculdade' element={<Afaculdade/>} />
            <Route path='/noticias' element={<NoticiasAxios/>} />
            <Route path='/dpo-lgpd' element={<DpoLgpd/>} />
            <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia/>} />
            <Route path='/admin-noticias' element={<AdminNoticias/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App