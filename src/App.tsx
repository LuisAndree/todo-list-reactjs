import React from 'react';
import { Header } from './components/Header/Header.tsx';
import { Task } from './components/Tasks/Tasks.tsx';
import { Counter } from './components/Counter/Counter.tsx'

import "./styles/global.css"


function App() {
  return (
    <>
    <Header></Header>
    <Task></Task>
    </>
  );
}

export default App;
