import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevWishlist) => {
      const alreadyExists = prevWishlist.find(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return prevWishlist;
      }

      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id)
    );
  };

  return (
    <BrowserRouter>

      <Navbar
        cartCount={cartItems.length}
        wishlistCount={wishlistItems.length}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              searchTerm={searchTerm}
            />
          }
        />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              searchTerm={searchTerm}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlistItems={wishlistItems}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;