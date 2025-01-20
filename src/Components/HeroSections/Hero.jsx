import "./Hero.css";
import img from "../../assets/images/bcpng.png";
import img2 from "../../assets/images/prayagteaproduct.png";

function Hero() {
  return (
    <div className="hero">
      {/* Left Side: Text Content */}
      <div className="hero-contents">
        <h1 className="hero-title">Prayag Tea</h1>
        <p className="hero-subtitle">हर घूंट में संगम</p>
        <p className="hero-description">
          Experience the richness of authentic leaf tea that blends tradition
          with every sip. Let each cup bring you closer to the harmony of
          Prayag.
        </p>
        <button className="hero-button">Learn More</button>
      </div>

      {/* Right Side: Image */}
      <div className="hero-image">
        <img src={img} alt="Prayag Tea" />
      </div>

      {/* Center Product Image */}
      <div className="productimg">
        <img src={img2} alt="Prayag Tea Products" />
      </div>
    </div>
  );
}

export default Hero;
