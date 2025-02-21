import { Header } from './components/Header/Header';
import { Task } from './components/Tasks/Tasks';

import "./styles/global.css"
import { Refs } from './components/Concepts/Refs';
import { Memoization } from './components/Concepts/Memoization';


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
      <Refs></Refs>
      <Memoization financialData={{
        incomes: [50, 20, 30],
        outcomes: [5, 8, 4]
      }}></Memoization>

      {/* <button onClick={()=> setToggle(!toggle) }>Toggle</button> */}
    </>
  );
}

export default App;
