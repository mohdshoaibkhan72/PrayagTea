// Hero.js
import "./Hero.css";
import img from "../../assets/images/prayagteaproduct.png";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="herocontents">
          <h1 className="hero-title">Prayag Tea</h1>
          <p className="hero-subtitle">हर घूंट में संगम</p>
          <p className="hero-description">
            Experience the richness of authentic leaf tea that blends tradition
            with every sip. Let each cup bring you closer to the harmony of
            Prayag.
          </p>
          <button className="hero-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img src={img} alt="Prayag Tea" />
        </div>
      </div>
    </>
  );
}

export default Hero;
