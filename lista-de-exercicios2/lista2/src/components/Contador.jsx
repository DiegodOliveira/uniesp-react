import React, { useState } from 'react';

const HookContador = () => {
  // useState para manter o valor do contador
  const [contador, setContador] = useState(1);

  // função para incrementar o contador
  const incrementarContador = () => {
    setContador(contadorPrev => contadorPrev + 1);
  };

  return (
    <div>
      <p>Valor do contador: {contador}</p>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
};

export default HookContador;