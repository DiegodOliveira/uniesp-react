import React from 'react'

const Aluno2 = ({nome, email, curso, media, status}) => {
  let status = media <= 7 ? "APROVADO" : "REPROVADO";
  
  return (
    <div>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Media: {media}</p>
        <p>Status: {status}</p>
    </div>
  )
}

export default Aluno2