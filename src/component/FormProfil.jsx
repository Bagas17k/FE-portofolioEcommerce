import React from "react";

const FormProfil = (props) => {
  return (
    <div>
      <div className="container my-5">
        <div className="my-3">
          <h1>Form Profile</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              placeholder="Fullname"
              onChange={(e) => props.changeInput(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => props.changeInput(e)}
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Provinsi"
              onChange={(e) => props.changeInput(e)}
              name="province"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Kota"
              onChange={(e) => props.changeInput(e)}
              name="city"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="kode Pos"
              onChange={(e) => props.changeInput(e)}
              name="postal_code"
            />
          </div>
          <select
            onChange={(e) => props.changeInput(e)}
            name="city_type"
            className="custom-select my-1 mr-sm-2 mb-4"
            id="inlineFormCustomSelectPref"
          >
            <option selected>Tipe Kota</option>
            <option value="kota">Kota</option>
            <option value="kabupaten">Kabupaten</option>
          </select>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Jalan"
              onChange={(e) => props.changeInput(e)}
              name="street"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Nomor Handphone"
              onChange={(e) => props.changeInput(e)}
              name="phone"
            />
          </div>
          <button
            onClick={() => props.postProfile()}
            type="submit"
            className="btn btn-primary"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormProfil;
