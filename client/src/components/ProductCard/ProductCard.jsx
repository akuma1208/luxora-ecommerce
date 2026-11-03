import "./ProductCard.css";

function ProductCard({
  id,
  name,
  category,
  price,
  image,
  discount,
  rating,
  addToCart,
  addToWishlist,
}) {

  const product = {
    id,
    name,
    category,
    price,
    image,
    discount,
    rating,
  };


  return (
    <div className="product-card">

      <div className="discount">
        {discount}
      </div>


      <div className="product-image">
        <img src={image} alt={name} />
      </div>


      <p className="category">
        {category}
      </p>


      <h3>
        {name}
      </h3>


      <div className="rating">
        {"⭐".repeat(rating)}
      </div>


      <p className="price">
        ₹{price}
      </p>


      <div
        className="wishlist-icon"
        onClick={() => addToWishlist(product)}
      >
        🤍
      </div>


      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>


    </div>
  );
}

export default ProductCard;