import React, { useState } from "react";
import '../index.css';
import Header from '../component/Header';
import Footer from '../component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from 'react-bootstrap';
import '../App.css';
function WhiteChocolate({ productList }){
    const itemsPerPage = 6; 
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = productList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2 className="dark">White Chocolate</h2>
        <div className="product-grid">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-item">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-12">
                    <div className="card-body flex justify-content-center">
                      <h5 className="card-title">{product.nameProduct}</h5>
                      <img src={product.images} alt={product.nameProduct} style={{ width: "100%" }} />
                                  <p className="card-text">{product.description}</p>
                                  <p className="card-text">Total: {product.Total}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          <input className="addtocart" type="submit" value="add to cart" />
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thêm phân trang */}
        <div className="text-center">
          <Pagination className="custom-pagination">
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </div>
      </div>
      <Footer />
    </>
  );
    

}
export default WhiteChocolate;