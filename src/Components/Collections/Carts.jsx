import React from "react";
import "./Carts.css"; // Import the CSS file
import product1 from "../../assets/images/chaiproduct.png";
import cupLogo from "../../assets/images/PrayagLg.png";

function Cart() {
  const products = [
    {
      id: 1,
      name: "Prayag Tea - Premium Blend",
      price: "₹199 for 500g",
      image: product1,
    },
    {
      id: 2,
      name: "Prayag Tea - Golden Blend",
      price: "₹249 for 1kg",
      image: product1,
    },
  ];

  return (
    <div className="container">
      <div className="header">
        <img src={cupLogo} alt="Cup Logo" className="cup-logo" />
        <h1>Collections</h1>
        <p>Our unique handpicked selection of teas</p>
      </div>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} className="image" />
            <h3 className="title">{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
