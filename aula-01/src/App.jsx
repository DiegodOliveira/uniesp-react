import React from 'react'
import Exercicio1Adicao from './components/Exercicio1Adicao'
import Exercicio1Multiplicacao from './components/Exercicio1Multiplicacao'
import Exercicio1Subtracao from './components/Exercicio1Subtracao'

const App = () => {
  return (
    <div>
      <Exercicio1Adicao num1={2} num2={3}/>
      <Exercicio1Multiplicacao num1={7} num={4}/>
      <Exercicio1Subtracao num1={30} num2={20}/>
    </div>
    )
}


export default App