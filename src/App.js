import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Components/Dashboard';
import Userlist from './Components/Userlist';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Forms from './Components/Form/Forms'
import ProductList from './Components/Products/ProductList';
import FillProductList from './Components/Productslist/FillProductList';



function App() {

  return (
    <BrowserRouter>
    <div id="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
           <Topbar />
         
         
            <div class="container-fluid">
             <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Users" element={<Userlist />}></Route>
            <Route path="/Forms" element={<Forms />}></Route>
            <Route path="/Product" element={<ProductList />}></Route>
            <Route path="/ProductList" element={<FillProductList />}></Route>
          
            
              </Routes>
              
              </div>
      </div>
      </div>
    </div>
    </BrowserRouter> 
  );


}

export default App;
