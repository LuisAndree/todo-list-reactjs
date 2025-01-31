import React from 'react';
import { Header } from './components/Header/Header.tsx';
import { Counter } from './components/Counter/Counter.tsx'

import "./styles/global.css"

function App() {
  return (
    <>
    <Header></Header>
    <Counter></Counter>
    </>
  );
}

export default App;
