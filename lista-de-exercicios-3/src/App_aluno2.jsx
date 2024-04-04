import React from 'react'

const App_aluno2 = () => {[
  { nome: "Gabigol", email: "naoqueromaissermengo@gmail.com", curso: "Atacante", media: 8 },
  { nome: "Arrascaeta", email: "melhordomengo@gmail.com", curso: "Meio-Campo", media: 10 }
];

return (
  <div>
    {Alunos2.map((Aluno2, index) => (
      <div key={index}>
        <p>Nome: {Aluno2.nome}</p>
        <p>Email: {Aluno2.email}</p>
        <p>Curso: {Aluno2.curso}</p>
        <p>Média: {Aluno2.media}</p>
        <p>Status: {Aluno2.media >= 7 ? "Aprovado" : "Reprovado"}</p>
      </div>
    ))}
  </div>
);
}
  


export default App_aluno2