import React from "react";
import moment from "moment";

const ProductComp = (props) => {
  // const { size, name, price, color, desc, img, createdAt, id } = props;
  const createdUTC = moment.utc(props.el.created_at).format("LLL");
  const changeRouterId = async (id) => {
    if (props.getHandle) {
      props.getHandle(id);
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div
            style={{ width: "18rem", height: "53rem" }}
            className="card card-image my-1"
          >
            <img
              onClick={() => changeRouterId(props.el.id)}
              value={props.el.id}
              variant="top"
              class="card-img"
              src={props.el.image_url}
              alt="img_product"
            />
            <div class="card-body">
              <div>
                <h5 class="card-title">{props.el.name}</h5>
              </div>
              <div>
                <h5 className="card-text badge badge-danger">
                  {props.el.price} IDR
                </h5>
              </div>
              <div>
                <p className="card-text">Warna: {props.el.color}</p>
              </div>
              <p className="card-text badge badge-primary">
                Size : {props.el.size}
              </p>
              <p className="card-text">
                Deskripsi: <br /> <span>{props.el.description}</span>
              </p>
              <div>
                <h5 className="card-text badge badge-danger">
                  {props.el.product_type.name}
                </h5>
              </div>

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
                onClick={() => props.PostCart(props.el.id)}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ProductComp;
