import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import Header from './components/header';


function App() {
  return (

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
