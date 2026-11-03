import "./Category.css";

function Category() {
  return (
    <section className="category-section">

      <h2>Shop By Category</h2>

      <div className="category-container">

        <div className="category-card">
          <img 
            src="https://via.placeholder.com/250"
            alt="Watches"
          />
          <h3>Watches</h3>
        </div>


        <div className="category-card">
          <img 
            src="https://via.placeholder.com/250"
            alt="Handbags"
          />
          <h3>Handbags</h3>
        </div>


        <div className="category-card">
          <img 
            src="https://via.placeholder.com/250"
            alt="Shoes"
          />
          <h3>Shoes</h3>
        </div>


        <div className="category-card">
          <img 
            src="https://via.placeholder.com/250"
            alt="Fashion"
          />
          <h3>Fashion</h3>
        </div>

      </div>

    </section>
  );
}

export default Category;