import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Dynamically get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div style={{ background: '#191D23', color: '#DEDCDC' }}>
      <div className="container">
        <div className="row mt-4 py-5">
          <div className="col-md-4">
            <div className="d-flex mb-4">
              <span className="mx-3" style={{ borderLeft: '4px solid gold' }}></span>
              <h2>About Us</h2>
            </div>
            <p>
              We are a trusted logistic company dedicated to delivering reliable solutions for
              seamless transportation, efficient supply chain management, and exceptional customer
              service. With our expertise and commitment, we strive to exceed your logistics needs
              and contribute to your business success.
            </p>
          </div>
          <div className="col-md-4">
            <div className="d-flex mb-4">
              <span className="mx-3" style={{ borderLeft: '4px solid gold' }}></span>
              <h2>Quick Links</h2>
            </div>
            <Link style={{ textDecoration: 'none', color: '#DEDCDC' }} to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>{' '}
              <span className="h5">Home</span>
            </Link>{' '}
            <br /> <br />
            <Link style={{ textDecoration: 'none', color: '#DEDCDC' }} to="/about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>{' '}
              <span className="h5">About Us</span>
            </Link>{' '}
            <br /> <br />
            <Link style={{ textDecoration: 'none', color: '#DEDCDC' }} to="/contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>{' '}
              <span className="h5">Get in Touch with Us</span>
            </Link>
          </div>
          <div className="col-md-4 mb-4">
            <div className="d-flex">
              <span className="mx-3" style={{ borderLeft: '4px solid gold' }}></span>
              <h2>Contact Us</h2>
            </div>
            <div className="mx-3 mt-3">
              <p>NextGen Mall 3rd floor</p>
              <p>+254746179246</p>
              <p>info@globeflight.co.ke</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="text-center py-3" style={{ borderTop: '1px solid #DEDCDC' }}>
          <p>
            All rights reserved © {currentYear} Globeflight
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
