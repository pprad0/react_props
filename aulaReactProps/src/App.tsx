import Card from "./components/card/Card"
import Contador from "./components/contador/Contador"
import Tarefa from "./components/tarefa/Tarefa"
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <Home />

      <Card titulo='React' descricao='Biblioteca JS' />
      <Card titulo='Spring' descricao='Framework Java' />

      <Contador />

      <Tarefa />

    </>
  )
}

export default App
