import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/HeroSections/Hero";
import About from "./Components/Aboutus/Aboutus";
import ProductShowcase from "./Components/Products/ProductShowcase";
import Banner from "./Components/Bannerpage/Banner";
import PrayagchaiDetails from "./Components/Prayagchai/PrayagchaiDetails";
import Prayagilaci from "./Components/prayagilachi/prayiagilachi";
import WhyChooseUs from "./Components/Whychoseus/Whychoseus";
import Videos from "./Components/videos/Videos";
import CustomerReviews from "./Components/CustomorReviews/CustomerReviews";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <ProductShowcase></ProductShowcase>
      <PrayagchaiDetails></PrayagchaiDetails>
      <Banner></Banner>
      <Prayagilaci></Prayagilaci>
      <WhyChooseUs></WhyChooseUs>
      <Videos></Videos>
      <CustomerReviews></CustomerReviews>
      <Footer></Footer>
    </>
  );
}

export default App;
