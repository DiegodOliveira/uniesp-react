import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Afaculdade from './pages/Afaculdade'
import Noticias from './pages/Noticias'
import DpoLgpd from './pages/DpoLgpd'
import Inicial from './pages/Inicial'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
    <BrowserRouter>
      <img src='uniesp.png' width={50} height={50}/>
      <Navbar/>
      <h1>Título da página</h1>
      <Routes>
        <Route path='/' element={<Inicial/>} />
        <Route path='/a-faculdade' element={<Afaculdade/>} />
        <Route path='/noticias' element={<Noticias/>} />
        <Route path='/dpo-lgpd' element={<DpoLgpd/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App