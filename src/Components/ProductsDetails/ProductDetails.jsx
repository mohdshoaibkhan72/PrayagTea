import React from "react";
import "./ProductDetails.css";
import praygchaiimg from "../../assets/images/Prayagchai/prayagteap1.png";
import praygcelachi from "../../assets/images/Prayagilachi/ilachipng.png";
import img4 from "../../assets/images/background-1.jpg"; // Path to the background image

const products = [
  {
    img: praygchaiimg,
    title: "Prayagchai",
    description: "Premium quality chai powder for the perfect brew.",
    price: "₹200",
    weight: "500g",
  },
  {
    img: praygcelachi,
    title: "Prayagelachi",
    description: "Authentic cardamom for that extra flavor.",
    price: "₹250",
    weight: "250g",
  },
];

const ProductDetails = () => {
  return (
    <>
      {/* Header Section */}
      <div className="header-section">
        <img src={img4} alt="Portfolio Background" className="header-image" />
        <div className="header-overlay">
          <nav className="nav-links">
            <p className="home-link">Home /</p>
            <p className="product-link">Product</p>
          </nav>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        <h1>The Perfect Tea Experience</h1>
        <section className="cart-items">
          {products.map((product, index) => (
            <div key={index} className="cart-item">
              <img
                src={product.img}
                alt={product.title}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h2 className="cart-item-title">{product.title}</h2>
                <p className="cart-item-description">{product.description}</p>
                <p className="cart-item-price">{product.price}</p>
                <p className="cart-item-weight">{product.weight}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
