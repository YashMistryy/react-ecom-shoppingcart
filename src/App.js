import {Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import ShopPage from './pages/shop/ShopPage';
import CartPage from './pages/cart/CartPage';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={< ShopPage/>}  />    {/* for our home page */}
      <Route path='/cart' element={< CartPage/>}/>  {/* for our cart page */}
    </Routes>
    </>
  );
}

export default App;
