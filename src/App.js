import logo from './logo.svg';
import './App.css';
import DaisyNavbar from './components/DaisyNavbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom' 
import Welcome from './components/Welcome';
import { CartContextProvider } from './context/CartContext';
import CartView from './components/CartView';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
        <CartContextProvider>
          <DaisyNavbar/>  
            <Routes>
              <Route path='/' element={<Welcome name="Juan"/>}/>
              <Route path='/workers' element={<ItemListContainer name="Juan"/>}/>
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
