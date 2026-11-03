import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">
          <h2>LUXORA</h2>
        </Link>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search luxury products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>

        <li>
          <Link to="/wishlist">
            ❤️ Wishlist ({wishlistCount})
          </Link>
        </li>

        <li>
          <Link to="/cart">
            🛒 Cart ({cartCount})
          </Link>
        </li>

      </ul>

      <Link to="/login">
        <button className="login-btn">
          Login
        </button>
      </Link>

    </nav>
  );
}

export default Navbar;