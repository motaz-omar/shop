import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopContextProvider from "./context/shopContext";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ShopContextProvider>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </ShopContextProvider>
      </Router>
    </>
  );
}

export default App;
