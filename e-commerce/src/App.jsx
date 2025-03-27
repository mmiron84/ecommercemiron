import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/IntemListContainer/ItemListContainer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    
    <>
       <NavBar/>
       <ItemListContainer saludo = "Bienvenido al Fulmen Ingenieria Laser"/>
    </>
  
  )
}

export default App
