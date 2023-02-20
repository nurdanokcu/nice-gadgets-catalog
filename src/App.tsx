import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar'
import { CartPage } from './pages/CartPage';
import { Favorites } from './pages/FavoritesPage';
import { Homepage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { ProductsList } from './pages/ProductsList';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/products">
          <Route path="phones" element={<ProductsList category="phones" />} />
          <Route
            path="tablets"
            element={<ProductsList category="tablets" />}
          />
          <Route
            path="accessories"
            element={<ProductsList category="accessories" />}
          />
        </Route>
        <Route path="/product/:productId?" element={<ProductDetailsPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
