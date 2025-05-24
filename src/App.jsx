import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/IntemListContainer/ItemListContainer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './componentes/ItemDeatil/ItemDetail';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import ItemError from "./componentes/ItemError/ItemError";
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/checkout';
import { ToastContainer, toast } from 'react-toastify';



function App() {
  return (
    <div className='Contenedor-principal'>

      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="*" element={<ItemError />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </CarritoProvider>
        <ToastContainer/>
      </BrowserRouter>
    </div>
  )
}
export default App
