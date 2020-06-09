import React from "react";

const CartComp = (props) => {
  const { product, price, qty, id } = props;
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={product.image_url} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <h5 className="card-text">
                Price: <span>{price}</span>
              </h5>
              <h5 className="card-text">
                Quantity: <span>{qty}</span>
              </h5>

              <p className="card-text">
                <small className="text-muted"></small>
              </p>
              <button
                onClick={() => props.deleteThisCart(id)}
                type="button"
                class="btn btn-danger"
                value={id}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartComp;
