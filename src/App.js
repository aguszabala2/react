import logo from './logo.svg';
import './App.css';
import DaisyNavbar from './components/DaisyNavbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <DaisyNavbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
