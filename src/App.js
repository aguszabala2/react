import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import CartView from './components/CartView';
import Homepage from './components/Homepage';
import DaisyNavbar from './components/navbar/DaisyNavbar';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <CartContextProvider>
          <DaisyNavbar/>  
            <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/workers' element={<ItemListContainer/>}/>
              <Route path='/location/:locationId' element={<ItemListContainer name="Juan"/>}/>
              <Route path='/workers/:robotsId' element={<ItemDetailContainer/>}/>
              <Route path='/cart/'element={<CartView/>}/>
            </Routes>
        </CartContextProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
