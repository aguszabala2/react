import logo from './logo.svg';
import './App.css';
import DaisyNavbar from './components/DaisyNavbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom' 
import Welcome from './components/Welcome';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <DaisyNavbar/>  
            <Routes>
              <Route path='/' element={<Welcome name="Juan"/>}/>
              <Route path='/employees' element={<ItemListContainer name="Juan"/>}/>
              <Route path='/itemcount'element={<ItemCount stock='20'/>}/>
            <Route path='/employees/:personaId' element={<ItemDetailContainer/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
