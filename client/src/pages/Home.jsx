import "./Home.css";
import ProductCard from "../components/ProductCard/ProductCard";
import Category from "../components/Category/Category";
import products from "../data/products";

function Home({
  addToCart,
  addToWishlist,
  searchTerm,
}) {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">

          <h1>Welcome to LUXORA</h1>

          <p>
            Discover premium products crafted for a modern lifestyle.
          </p>

          <button>
            Shop Now
          </button>

        </div>
      </section>

      <Category />

      <section className="products-section">

        <h2>Featured Products</h2>

        <div className="product-container">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}
                discount={product.discount}
                rating={product.rating}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />

            ))

          ) : (

            <h2>No Products Found 😔</h2>

          )}

        </div>

      </section>

    </div>
  );
}

export default Home;