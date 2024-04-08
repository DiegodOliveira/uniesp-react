import React,{useState} from 'react'

function Formulario() {
  
  const [espacos, preencher] = useState({
    nome: "",
    contato: "",
    mensagem: ""
  });
    
  const preencherEspacos = (p) =>{
    const {name, value} = p.target;
    preencher({
        ...espacos,[name]: value
    }) 
  }

  const enviar = (e) =>{
    e.preventDefault();
    let dados = JSON.stringify(espacos);
    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${dados}`);
  }
  


    return (
    <form onSubmit={enviar}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={espacos.nome}
          onChange={preencherEspacos}
        />
      </div>
      <div>
        <label htmlFor="contato">Contato:</label>
        <input
          type="text"
          id="contato"
          name="contato"
          value={espacos.contato}
          onChange={preencherEspacos}
        />
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={espacos.mensagem}
          onChange={preencherEspacos}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario