import React from 'react'
import Aluno from './components/Aluno'

const App_Aluno = () => {
  return (
    <div>{
        [
            {nome: "João Gomes", email: "framengo@mail.com", curso: "Sistemas", media: 7},
            {nome: "Paquetá", email: "mulambley@mail.com", curso: "Sistemas", media: 8},
            {nome: "Vini jr", email: "madridista@mail.com", curso: "Sistemas", media: 9},
        ].map((Aluno) =>
          <Aluno nome={Aluno.nome} email={Aluno.email} curso={Aluno.curso} media={Aluno.media} />)
        }</div>
  )
}

export default App_Aluno