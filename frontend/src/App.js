import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginandSignup } from './Pages/LoginandSignup';
import { ProductCategory } from './Pages/ProductCategory';
import { Product } from './Pages/Product';
import { Home } from './Pages/Home';
import { Cart } from './Pages/Cart';
import { Footer } from './Components/Footer/Footer'
import banner from './Components/Assets/category_banner.png'
import sustainability_banner from './Components/Assets/sustainability_banner.png'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginandSignup />} />
          <Route path="/standard" element={<ProductCategory banner={banner} category="standard" />} />
          <Route path="/organic" element={<ProductCategory banner={banner} category="organic" />} />
          <Route path="/sustainable" element={<ProductCategory banner={sustainability_banner} category="sustainable" />} />
          <Route path="/fresh" element={<ProductCategory  banner={banner} category="fresh" />} />
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
