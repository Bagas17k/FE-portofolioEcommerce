import React from "react";
import moment from "moment";

const ProductComp = (props) => {
  const {
    product_type_id,
    name,
    price,
    color,
    desc,
    img,
    createdAt,
    id,
  } = props;
  const changeRouterId = async (id) => {
    if (props.getHandle) {
      props.getHandle(id);
    }
  };
  return (
    <div>
      <div className="container my-5">
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row no-gutters">
            <div
              className="col-md-4"
              onClick={() => changeRouterId(id)}
              value={id}
            >
              <img src={img} className="card-img" alt="img_product" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-text badge badge-danger">{price} IDR</h5>
                <p className="card-text">
                  Deskripsi: <br /> <span>{desc}</span>
                </p>
                <p className="card-text">Warna: {color}</p>
                <p className="card-text badge badge-primary">
                  {product_type_id}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Updated {moment({ createdAt }).fromNow()}
                  </small>
                </p>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => props.PostCart(id)}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductComp;
