import React from "react";
import PropTypes from "prop-types";

function Post({
  post: { id, titulo, img, descripcion, likes },
  like,
  eliminarPost,
}) {
  const handleLike = () => {
    like(id);
  };

  const handleDelete = () => {
    eliminarPost(id);
  };

  const handleTituloChange = (e) => {
    console.log("Nuevo título:", e.target.value);
  };

  return (
    <div className="card col-12 col-sm-4 d-inline mx-0 px-3">
      <div className="card-body p-0">
        <img
          className="card-img-top"
          src={img}
          alt={titulo}
        />
        <div className="p-3">
          <h4 className="card-title">{titulo}</h4>
          <input onChange={handleTituloChange} />
          <p className="card-text">{descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button
                aria-label="Dar like"
                onClick={handleLike}
                className={`fa-heart fa-xl ${
                  likes ? "fa-solid" : "fa-regular"}`}
                tabIndex={0}
                onKeyDown={e => { if (e.key === "Enter") handleLike(); }}
              ></button>
              <span className="ms-1">{likes}</span>
            </div>
            <button
              aria-label="Eliminar post"
              onClick={handleDelete}
              className="fa-solid fa-x"
              tabIndex={0}
              onKeyDown={e => { if (e.key === "Enter") handleDelete(); }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
  like: PropTypes.func.isRequired,
  eliminarPost: PropTypes.func.isRequired,
};

export default Post;