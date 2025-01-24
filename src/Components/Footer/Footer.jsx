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
    { href: "#", text: "FAQs" },
    { href: "#", text: "Quality" },
    { href: "#", text: "Gift Cards" },
    { href: "#", text: "Contact" },
    { href: "#", text: "Shop" },
  ];

  const shopLinks = [
    { href: "#", text: "Loose Leaf Tea" },
    { href: "#", text: "Green Teas" },
    { href: "#", text: "Packaged Teas" },
    { href: "#", text: "Teaware" },
    { href: "#", text: "Tea Gifts" },
    { href: "#", text: "Iced Tea" },
  ];

  const helpCenterLinks = [
    { href: "#", text: "Delivery Information" },
    { href: "#", text: "Terms & Conditions" },
    { href: "#", text: "Returns & Refunds" },
    { href: "#", text: "Privacy Notice" },
    { href: "#", text: "Shopping" },
    { href: "#", text: "FAQs" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <img src={logo} alt="Company Logo" className="footer-logo" />
          </div>

          {/* Reusable Footer Sections */}
          <FooterSection heading="Company" links={companyLinks} />
          <FooterSection heading="Shop" links={shopLinks} />
          <FooterSection heading="Help Center" links={helpCenterLinks} />

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Get in Touch</h3>
            <p>phulpur prayagraj 212402 Uttar pradesh</p>
            <p>
              Email: <a href="prayagtea873@gmail.com">prayagtea873@gmail.com</a>
            </p>
            <p>
              Need help? Call us:
              <a href="tel:+14065550120">(+91) 9956875067</a>
            </p>
          </div>
        </div>
      </footer>
      <div className="paymnt">
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
