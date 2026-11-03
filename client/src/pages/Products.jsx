import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";
import "./Products.css";

function Products({
  addToCart,
  addToWishlist,
  searchTerm,
}) {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">

      <h1>All Products</h1>

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

    </div>
  );
}

export default Products;