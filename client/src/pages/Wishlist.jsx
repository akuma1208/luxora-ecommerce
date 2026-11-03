function Wishlist({ wishlistItems, removeFromWishlist }) {

  return (
    <div className="wishlist-page">

      <h1>❤️ My Wishlist</h1>

      {
        wishlistItems.length === 0 ? (

          <p>
            Your wishlist is empty.
          </p>

        ) : (

          <div className="wishlist-container">

            {
              wishlistItems.map((item, index) => (

                <div className="wishlist-card" key={index}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price}
                    </p>


                    <button
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>
  );
}

export default Wishlist;