import React from "react";
import "./Footer.css"; // Import the external CSS file
import logo from "../../assets/images/prayagLogo1-removebg.png";
import paymntpng from "../../assets/images/png/payments.png";

// Reusable Footer Section Component
const FooterSection = ({ heading, links }) => (
  <div className="footer-section">
    <h3 className="footer-heading">{heading}</h3>
    <ul className="footer-links">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // Data for the footer sections
  const companyLinks = [
    { href: "/page-not-found", text: "FAQs" },
    { href: "/page-not-found", text: "Quality" },
    { href: "/page-not-found", text: "Gift Cards" },
    { href: "/contact-us", text: "Contact" },
    { href: "/page-not-found", text: "Shop" },
  ];

  const shopLinks = [
    { href: "/page-not-found", text: "Loose Leaf Tea" },
    { href: "/page-not-found", text: "Green Teas" },
    { href: "/page-not-found", text: "Packaged Teas" },
    { href: "/page-not-found", text: "Teaware" },
    { href: "/page-not-found", text: "Tea Gifts" },
    { href: "/page-not-found", text: "Iced Tea" },
  ];

  const helpCenterLinks = [
    { href: "/page-not-found", text: "Delivery Information" },
    { href: "/page-not-found", text: "Terms & Conditions" },
    { href: "/page-not-found", text: "Returns & Refunds" },
    { href: "/page-not-found", text: "Privacy Notice" },
    { href: "/page-not-found", text: "Shopping" },
    { href: "/page-not-found", text: "FAQs" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container " data-aos="fade-up">
          <div className="footer-section ">
            <img src={logo} alt="Company Logo" className="footer-logo" />
          </div>

          {/* Reusable Footer Sections */}
          <FooterSection heading="Company" links={companyLinks} />
          <FooterSection heading="Shop" links={shopLinks} />
          <FooterSection heading="Help Center" links={helpCenterLinks} />

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Get in Touch</h3>
            <p>42-Purushottumpur,Mugarson,Parayagraj 221505 UP India</p>
            <p>
              Email: <a href="prayagtea873@gmail.com">prayagtea873@gmail.com</a>
            </p>
            <p>
              Need help? Call us:
              <a href="tel:+14065550120">(+91) 9956875067 , </a>
            </p>
            <p>
              <a href="tel:+8090503306">8090503306 </a>
            </p>
          </div>
        </div>
      </footer>
      <div className="paymnt" data-aos="fade-up">
        PAYMENT WE ACCEPT
        <img src={paymntpng} alt="payment image" />
      </div>
      <div className="Copyright">
        <p>
          Copyright © 2023 <a className="prg">Prayagtea </a>. All rights
          reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
