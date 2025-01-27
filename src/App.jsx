import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";

// Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PageNotFound from "./Components/Pagenotfound/Pagenotfound";

// Lazy load other components for better performance
const Hero = lazy(() => import("./Components/HeroSections/Hero"));
const About = lazy(() => import("./Components/Aboutus/Aboutus"));
const ProductShowcase = lazy(() =>
  import("./Components/Products/ProductShowcase")
);
const Banner = lazy(() => import("./Components/Bannerpage/Banner"));
const PrayagchaiDetails = lazy(() =>
  import("./Components/Prayagchai/PrayagchaiDetails")
);
const Prayagilaci = lazy(() =>
  import("./Components/prayagilachi/prayiagilachi")
);
const WhyChooseUs = lazy(() => import("./Components/Whychoseus/Whychoseus"));
const Videos = lazy(() => import("./Components/videos/Videos"));
const CustomerReviews = lazy(() =>
  import("./Components/CustomorReviews/CustomerReviews")
);
const ProductDetails = lazy(() =>
  import("./Components/ProductsDetails/ProductDetails")
);
const ContactUs = lazy(() => import("./Components/Contactus/Contactus"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={
          <div className="loading-container">
            <div className="spinner"></div>
          </div>
        }
      >
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
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Page Not Found Route */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
