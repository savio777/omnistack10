import React, { useState } from 'react'
import Header from './HeaderTest'

// Componentes ~> Bloco isolado de HTML, CSS e JS
// Propriedades ~> Informações que um componente Pai passa para o componente Filho
// Estados ~> Informações mantidas pelo componente de forma imutável

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <Header text='Olá' value={count} />
      <Header text='Hello' value={count} />

      <button onClick={() => setCount(count + 1)}>Clique</button>
    </>
  )
}

export default App
