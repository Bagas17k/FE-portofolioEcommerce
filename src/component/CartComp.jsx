import React from "react";

const CartComp = (props) => {
  const { product, price, qty } = props;
  return (
    <div className="container my-5">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image_url} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartComp;
