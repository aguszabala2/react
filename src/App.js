import logo from './logo.svg';
import './App.css';
import DaisyNavbar from './components/DaisyNavbar';
// import ItemListContainer from './components/ItemListContainer';
// import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <DaisyNavbar/>
      {/* <ItemListContainer name="Juan"/>
      <ItemCount stock='20'/> */}
      {/* <ItemDetailContainer id={2}/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
