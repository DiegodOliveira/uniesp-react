import React from 'react'

const EstouConseguindoAprenderReact2 = (props) => {
    let afirmacao;

    if(props.afirmacao === true){
        afirmacao = <h1>Estou conseguindo aprender React!</h1>
    }else {
        afirmacao = <h1>Preciso estudar mais!</h1>
    }

  return (

    <div>{afirmacao}</div>
  )
}

export default EstouConseguindoAprenderReact2