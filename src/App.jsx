import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import ProductDetails from "./Components/ProductsDetails/ProductDetails";
import ContactUs from "./Components/Contactus/Contactus";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <ProductShowcase />
              <PrayagchaiDetails />
              <Banner />
              <Prayagilaci />
              <WhyChooseUs />
              <Videos />
              <CustomerReviews />
            </>
          }
        />

        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contacus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
