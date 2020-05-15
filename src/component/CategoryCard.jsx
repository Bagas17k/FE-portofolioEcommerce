import React from "react";

const CategoryCard = (props) => {
  const { category } = props;
  return (
    <div className="col-sm-4 d-flex justify-content-center mb-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={require("../images/hijab.jpg")}
          alt="gambar_kat"
        />
        <div className="card-body text-center">
          <p className="card-text">{category}</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
