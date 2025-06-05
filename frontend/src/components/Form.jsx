import React from "react";
import PropTypes from "prop-types";

function Form({ setTitulo, setImgSrc, setDescripcion, agregarPost }) {
  return (
    <div className="form">
      <div className="mb-2">
        <h6>Agregar post</h6>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="imgSrc">URL de la imagen</label>
        <input
          id="imgSrc"
          onChange={(event) => setImgSrc(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descripcion">Descripción</label> <br />
        <textarea
          id="descripcion"
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex">
        <button onClick={agregarPost} className="btn btn-light m-auto">
          Agregar
        </button>
      </div>
    </div>
  );
}

Form.propTypes = {
  setTitulo: PropTypes.func,
  setImgSrc: PropTypes.func,
  setDescripcion: PropTypes.func,
  agregarPost: PropTypes.func,
};

export default Form;
