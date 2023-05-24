import React, { useState } from 'react';
import './CommentForm.css';

function CommentForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear un nuevo objeto de comentario
    const newComment = {
      id: Date.now(),
      name: name,
      comment: comment
    };

    // Agregar el nuevo comentario a la lista de comentarios
    setCommentsList([...commentsList, newComment]);

    // Restablecer los campos del formulario
    setName('');
    setComment('');
  };

  const handleDelete = (commentId) => {
    // Filtrar la lista de comentarios para eliminar el comentario con el ID dado
    const updatedCommentsList = commentsList.filter(
      (comment) => comment.id !== commentId
    );

    // Actualizar la lista de comentarios
    setCommentsList(updatedCommentsList);
  };

  return (
    <div className="comment-form-container">
      <h2>Deja tu comentario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comentario:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <button type="submit">Enviar comentario</button>
      </form>

      <h3>Comentarios</h3>
      {commentsList.map((comment) => (
        <div key={comment.id}>
          <p>
            <strong>{comment.name}: </strong>
            {comment.comment}
          </p>
          <button onClick={() => handleDelete(comment.id)}>Borrar</button>
        </div>
      ))}
    </div>
  );
}

export default CommentForm;