import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AddItemToInventory from './AddItemToInvetory';
import InventoryList from './InventoryList';
import EditInventoryItem from './EditInventoryItem';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/editinventoryitem/:id">Edit Inventory Item</Link>
      <Routes> 
        <Route path='/' element={<AddItemToInventory/>}></Route>
        <Route path='/inventory' element={<InventoryList/>}></Route>
        <Route path='/editinventoryitem/:id' element= {<EditInventoryItem/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
