import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSections/Hero";
import About from "./Components/Aboutus/Aboutus";
import ProductShowcase from "./Components/Products/ProductShowcase";
import Banner from "./Components/Bannerpage/Banner";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <ProductShowcase></ProductShowcase>
      <Banner></Banner>
    </>
  );
}

export default App;
