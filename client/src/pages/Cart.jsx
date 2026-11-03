import "./Cart.css";

function Cart({ cartItems, removeFromCart }) {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-page">

      <h1>🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (

        <p className="empty">
          Your cart is empty.
        </p>

      ) : (

        <>

          <div className="cart-container">

            {cartItems.map((item, index) => (

              <div className="cart-card" key={index}>

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-details">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    Category: {item.category}
                  </p>

                  <h2>
                    ₹{item.price}
                  </h2>

                  <button
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>


          <div className="total-box">

            <h2>
              Total: ₹{totalPrice}
            </h2>

            <button>
              Checkout
            </button>

          </div>

        </>

      )}

    </div>
  );
}

export default Cart;