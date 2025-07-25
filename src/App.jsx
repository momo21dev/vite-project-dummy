import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Header from './components/header';
import CartInfo from './components/CartInfo';
import { useState } from 'react';
import Confirmation from './components/ConfirmationPage';


function App() {
  const [cart, setCart] = useState([])
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList cart={cart} setCart={setCart} />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/confirm" element={<Confirmation />} />
        <Route path="/cart" element={<CartInfo cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
