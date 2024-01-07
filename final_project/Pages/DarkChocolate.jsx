import React from "react";
import '../src/index.css';


const DarkChocolate = ({ productList }) =>{
    return (
         <div className="product-grid">
      {productList.map((product) => (
        <div key={product.id} className="product-item">
          <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-12">
                <div className="card-body flex justify-content-center">
                  <h5 className="card-title">{product.nameProduct}</h5>
                  <img src={product.images} alt={product.nameProduct} style={{ width: "100%" }} />
                  <p className="card-text">
                    {/* Thêm nội dung của phần này nếu cần */}
                  </p>
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
    //    <div classNameName="product">
    //   <img classNameName="img" src={png1}h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //    <div classNameName="product">
    //   <img classNameName="img" src={png1}  />
    //    <h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //  </div>
    //  <div className="product">
    //   <img className="img" src={png1}  />
    //    <h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //  </div>
    //  <div className="product">
    //   <img className="img" src={png1}  />
    //    <h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //  </div>
    //  <div className="product">
    //   <img className="img" src={png1}  />
    //    <h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //  </div>
    //  <div className="product">
    //   <img className="img" src={png1}  />
    //    <h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //  </div>
    //  <div className="product">
    //   <img className="img" src={png1}  />
    //    <h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //  </div>
    //  <div className="product">
    //   <img className="img" src={png1}  />
    //    <h3>chocolate</h3>
    //   <p></p>
    //    <button onClick={() => addToCart()}>Add to Cart</button>
    //  </div>
    //  </div>
//     <div className="row container-fluid">

// <div className="column col-3">
//                     <div className="card mb-3 text-center" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">

//                               <img src={png1} alt="" style={{width: "100%"}} />
                                
//                             </div>
                      
// <div className="col-md-12">

//                                 <div className="card-body flex justify-content-center">
//                                     <h5 className="card-title ">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary"><input className="addtocart" type="submit"
//                                                 value="add to cart"/></small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

 
// <div className="column col-3">
//                     <div className="card mb-3" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">
// <img src={png2} alt="" style={{width: "100%"}} />


                                
//                             </div>
// <div className="col-md-12">

//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary"><input className="addtocart" type="submit"
//                                                 value="add to cart"/></small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

 
// <div className="column col-3">
//                     <div className="card mb-3" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">
// <img src={png3} alt="" style={{width: "100%"}} />


                                
//                             </div>
// <div className="col-md-12">

//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary"><input className="addtocart" type="submit"
//                                                 value="add to cart"/></small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

 
// <div className="column col-3">
//                     <div className="card mb-3" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">
// <img src={png4} alt="" style={{width: "100%"}} />


                                
//                             </div>
// <div className="col-md-12">

//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary"><input className="addtocart" type="submit"
//                                                 value="add to cart"/></small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

 
// <div className="column col-3">
//                     <div className="card mb-3" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">

                                
//                             </div>
// <div className="col-md-12">

//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary"><input className="addtocart" type="submit"
//                                                 value="add to cart"/></small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

 
// <div className="column col-3">
//                     <div className="card mb-3" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">

                                
//                             </div>
// <div className="col-md-12">

//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary"><input className="addtocart" type="submit"
//                                                 value="add to cart"/></small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

 
// <div className="column col-3">
//                     <div className="card mb-3" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">

                                
//                             </div>
// <div className="col-md-12">

//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary"><input className="addtocart" type="submit"
//                                                 value="add to cart"/></small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

 
// <div className="column col-3">
//                     <div className="card mb-3" style={{maxWidth: "540px"}}>
//                         <div className="row g-0">
// <div className="col-md-12">

                                
//                             </div>
// <div className="col-md-12">

//                                 <div className="card-body">
//                                     <h5 className="card-title">Card title</h5>
//                                     <p className="card-text">
                                         
//                                     </p>
//                                     <p className="card-text">
//                                         <small className="text-body-secondary">
//                                             <input className="addtocart" type="submit" value="add to cart"/>
//                                         </small>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
     
    );

}
export default DarkChocolate;
