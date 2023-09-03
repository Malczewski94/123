import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailConteiner";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout';
import Layout from './pages/layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path='/category/:categoryId' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
