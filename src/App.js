import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AddItemToInventory from './AddItemToInvetory';
import InventoryList from './InventoryList';
import EditInventoryItem from './EditInventoryItem';
import AddSalesItem from './AddSalesItem';
import Sales from './Sales';
import EditSalesItem from './EditSalesItem';
import InventoryReports from './InventoryReports';
import SalesTransaction from './SalesTransaction';
import Home from './Home';

function App() {
  return (
    <div className="App">
    
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/addItem' element={<AddItemToInventory/>}></Route>
        <Route path='/inventory' element={<InventoryList/>}></Route>
        <Route path='/editinventoryitem/:id' element= {<EditInventoryItem/>}></Route>
        <Route path='/editsalesitem/:id' element={<EditSalesItem/>}></Route>
        <Route path='/addsales' element={<AddSalesItem/>}></Route>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/inventoryreports' element={<InventoryReports/>}/>
        <Route path='/salestransaction' element={<SalesTransaction/>}/>
      </Routes>
    </div>
  );
}

export default App;
