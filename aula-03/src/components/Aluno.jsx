import React from 'react'

const Aluno = ({nome,email,curso,media}) => {
  return (
    <>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
        <p>Curso: {curso}</p>
        <p>Media: {media}</p>
    </>
  )
}

export default Aluno