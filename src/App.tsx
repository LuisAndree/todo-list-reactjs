import React, { useEffect, useState } from 'react';
import { Header } from './components/Header/Header.tsx';
import { Task } from './components/Tasks/Tasks.tsx';
import { Counter } from './components/Counter/Counter.tsx'

import "./styles/global.css"


function App() {

  // const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   console.log('executando a funcao do useEffect...')

  //   //componentWillUnmount => cleanup Function
  //   return () => {
  //     //cleanup Function
  //     console.log('essa funcao vai ser executada quando o componente App for desmontado da tela')
  //   }
  // }, [toggle])

  // O useEfeect será desaarado sempre q alguma variavel do array de dependencias for alterada
  // Por padrao sempre o useEffect sera disparada apos a montagem do componente (componentDidMount)

  return (
    <>
      <Header></Header>
      <Task></Task>

      {/* <button onClick={()=> setToggle(!toggle) }>Toggle</button> */}
    </>
  );
}

export default App;
