import React from "react";
import moment from "moment";

const ProductComp = (props) => {
  const { size, name, price, color, desc, img, createdAt, id } = props;
  const createdUTC = moment.utc(createdAt).format("LLL");
  const changeRouterId = async (id) => {
    if (props.getHandle) {
      props.getHandle(id);
    }
  };
  return (
    <div>
      <div
        class="card d-flex justify-content-center"
        style={{ width: "18rem" }}
      >
        <div>
          <img
            onClick={() => changeRouterId(id)}
            value={id}
            src={img}
            className="card-img"
            alt="img_product"
          />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h5 className="card-text badge badge-danger">{price} IDR</h5>
            <p className="card-text">Warna: {color}</p>
            <p className="card-text badge badge-primary">Size : {size}</p>
            <p className="card-text">
              Deskripsi: <br /> <span>{desc}</span>
            </p>
            <p className="card-text">
              <small className="text-muted">
                Updated {moment(createdUTC).fromNow()}
              </small>
            </p>
          </div>
          <div className="container mb-2">
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
  );
};
export default ProductComp;
