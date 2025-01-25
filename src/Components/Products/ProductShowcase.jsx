import React, { useState } from "react";
import "./ProductShowcase.css";
import product1 from "../../assets/images/Prayagchai/prayagteap1.png";
import hover1 from "../../assets/images/hover1.jpg";
import product2 from "../../assets/images/Prayagilachi/ilachipng.png";
import hover2 from "../../assets/images/hover2.jpg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Prayag Tea",
      price: "$150-$199",
      image: product1,
      hoverImage: hover1,
      rating: 4, // Star rating out of 5
    },
    {
      id: 2,
      name: "Prayag Ilachi Tea",
      price: "$150-$199",
      image: product2,
      hoverImage: hover2,
      rating: 5,
    },
  ];

  return (
    <div className="product-container" data-aos="fade-up">
      <div className="left">
        <h1>Explore Our Seasonal Favourites</h1>
        <a href="#">View All Products</a>
        <div className="navigation-buttons">
          <button className="nav-button">{"<"}</button>
          <button className="nav-button">{">"}</button>
        </div>
      </div>

      <div className="product-showcase">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={hovered ? product.hoverImage : product.image} // Change image on hover
        alt={product.name}
        className="product-image"
      />
      <div className="product-details">
        <div className="star-rating">
          {[...Array(product.rating)].map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
        </div>
        <h2>{product.name}</h2>
        <span className="product-price">{product.price}</span>
        <i className="fas fa-shopping-bag product-bag"></i> {/* Bag icon */}
      </div>
    </div>
  );
};

export default ProductShowcase;
