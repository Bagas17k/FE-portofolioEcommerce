import React from "react";
import moment from "moment";

const ProductComp = (props) => {
  const { name, price, color, desc, img, createdAt, category } = props;
  return (
    <div>
      <div className="container my-5">
        <div className="card mb-3" style={{ maxWidth: "540px;" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
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
                <p className="card-text badge badge-primary">{category.name}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Updated {moment({ createdAt }).fromNow()}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductComp;
