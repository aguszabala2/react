import logo from './logo.svg';
import './App.css';
import DaisyNavbar from './components/DaisyNavbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <DaisyNavbar/>
      <ItemListContainer name="Juan"/>
      <ItemCount/>
    </div>
  );
}

export default App;
