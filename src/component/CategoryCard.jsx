import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <div className="col-sm-4 d-flex justify-content-center mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.image} alt="gambar_kat" />
        <div className="card-body text-center">
          <Link
            to={"/product/category/" + props.id}
            className="card-text"
            onClick={() => props.GetProductByCategory(props.id)}
          >
            {props.category}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
