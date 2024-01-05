import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="text-center text-lg-start  text-dask" style={{border: '2px dashed black', marginTop: 20, borderRadius: 10}}>
    <section className="d-flex justify-content-center justify-content-lg-between p-4" style={{borderBottom: '2px dashed black'}}>
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="#" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
    </section>
    <section className="test">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />Envato Chocolate
            </h6>
            <p>
              Welcome to Envato, where chocolate becomes an art form. Immerse yourself in a world of
              refined
              indulgence with our
              curated selection of premium chocolates. Elevate your moments with Enavo, where
              sophistication
              meets sweetness in every bite.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Products
            </h6>
            <p>
              <a href="#!" className="text-reset">Dark Chocolate</a>
            </p>
            <p>
              <a href="#!" className="text-reset">White Chocolate</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Christmas Gifts</a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <a href="#!" className="text-reset">Pricing</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Settings</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Orders</a>
            </p>
            <p>
              <a href="#!" className="text-reset">Help</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3" /> Industrial University of Ho Chi Minh City</p>
            <p>
              <i className="fas fa-envelope me-3" />
              nguyentienmanh@gmail.com
              <br />
            </p>
            <p><i className="fas fa-phone me-3" /> + 01 234 567 88</p>
            <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
          </div>
        </div>
      </div>
    </section>
    <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
      © 2023 Chocolate Luxury Shop:
      <a className="text-reset fw-bold" href="Home.html">Envato Chocolate</a>
    </div>
  </footer>
    </>
  )
}

export default Footer