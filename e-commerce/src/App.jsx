import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/IntemListContainer/ItemListContainer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './componentes/ItemDeatil/ItemDetail';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ItemError from "./componentes/ItemError/ItemError";



function App() {


  return (
<div className='Contenedor-principal'>
    
<BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<ItemError/>}/>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria"element={<ItemListContainer />}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        </Routes>
</BrowserRouter>
   
       
    

    </div>
  
  )
}

export default App
