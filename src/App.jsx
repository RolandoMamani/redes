
import './App.css'
import Login from './componentes/Login'
import Contacto from './componentes/Contacto'
import ModoOscuro from './componentes/ModoOscuro'

function App() {


  return (
    <>
    <ModoOscuro />   {/* Mostrar botón para cambiar modo */}
    <Login/>
    <Contacto/>

    </>
  )
}

export default App
