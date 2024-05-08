import React, { useState, useEffect } from 'react'

const url = 'http://localhost:3000/alunos'

const GerenciamentoAluno = () => {

    const [aluno, setAluno] = useState([])

    useEffect(() => {
        async function fetchData(){
            const response = await fetch(url)
            const data = await response.json()
            setAluno(data)
        }

        fetchData()
    }, [])

  return (
    <div>
        <table border='1px'>
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Email:</th>
                    <th>Curso:</th>
                </tr>
            </thead>
            <tbody>
                {
                    aluno.map((alunos) => (
                        <tr key={alunos.id}>
                            <td>{alunos.nome}</td>
                            <td>{alunos.email}</td>
                            <td>{alunos.curso}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
    </div>
  )
}

export default GerenciamentoAluno